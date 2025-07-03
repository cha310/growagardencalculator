'use client';

import { plants } from '@/data/gameData';
import { useState, useMemo } from 'react';

type SortField = 'name' | 'baseValue' | 'category' | 'type' | 'weight' | 'valuePerWeight';
type SortDirection = 'asc' | 'desc';

export function ValuesTable() {
  const [sortField, setSortField] = useState<SortField>('baseValue');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Get unique categories and types for filters
  const categories = useMemo(() => 
    Array.from(new Set(plants.map(plant => plant.category))).sort(), 
    []
  );
  
  const types = useMemo(() => 
    Array.from(new Set(plants.map(plant => plant.type))).sort(), 
    []
  );

  // Filter and sort plants
  const filteredAndSortedPlants = useMemo(() => {
    let filtered = plants.filter(plant => {
      const matchesCategory = filterCategory === 'all' || plant.category === filterCategory;
      const matchesType = filterType === 'all' || plant.type === filterType;
      const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesType && matchesSearch;
    });

    return filtered.sort((a, b) => {
      let aValue: number | string;
      let bValue: number | string;

      switch (sortField) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'baseValue':
          aValue = a.baseValue;
          bValue = b.baseValue;
          break;
        case 'category':
          aValue = a.category;
          bValue = b.category;
          break;
        case 'type':
          aValue = a.type;
          bValue = b.type;
          break;
        case 'weight':
          aValue = a.weight || 0;
          bValue = b.weight || 0;
          break;
        case 'valuePerWeight':
          aValue = a.weight ? a.baseValue / a.weight : 0;
          bValue = b.weight ? b.baseValue / b.weight : 0;
          break;
        default:
          aValue = a.baseValue;
          bValue = b.baseValue;
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }, [plants, sortField, sortDirection, filterCategory, filterType, searchTerm]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Common': return '#9ca3af';
      case 'Uncommon': return '#4ade80';
      case 'Rare': return '#60a5fa';
      case 'Legendary': return '#a855f7';
      case 'Mythical': return '#fbbf24';
      case 'Secret': return '#ef4444';
      default: return '#9ca3af';
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div style={{ 
      backgroundColor: '#374151', 
      border: '3px solid #4ade80', 
      borderRadius: '12px', 
      padding: '24px',
      marginTop: '32px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
    }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#4ade80', 
        marginBottom: '24px',
        fontFamily: "'Press Start 2P', cursive",
        textAlign: 'center'
      }}>
        Complete Values Chart
      </h2>

      {/* Filters */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px',
        marginBottom: '24px' 
      }}>
        <div>
          <label style={{ 
            display: 'block',
            fontSize: '12px',
            color: '#4ade80',
            marginBottom: '8px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            Search:
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search plants..."
            style={{
              width: '100%',
              padding: '8px 12px',
              backgroundColor: '#1f2937',
              border: '2px solid #4ade80',
              borderRadius: '6px',
              color: '#d1d5db',
              fontSize: '12px',
              fontFamily: "'Press Start 2P', cursive"
            }}
          />
        </div>

        <div>
          <label style={{ 
            display: 'block',
            fontSize: '12px',
            color: '#4ade80',
            marginBottom: '8px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            Category:
          </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              backgroundColor: '#1f2937',
              border: '2px solid #4ade80',
              borderRadius: '6px',
              color: '#d1d5db',
              fontSize: '12px',
              fontFamily: "'Press Start 2P', cursive"
            }}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ 
            display: 'block',
            fontSize: '12px',
            color: '#4ade80',
            marginBottom: '8px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            Type:
          </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              backgroundColor: '#1f2937',
              border: '2px solid #4ade80',
              borderRadius: '6px',
              color: '#d1d5db',
              fontSize: '12px',
              fontFamily: "'Press Start 2P', cursive"
            }}
          >
            <option value="all">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p style={{ 
        fontSize: '12px',
        color: '#d1d5db',
        marginBottom: '16px',
        fontFamily: "'Press Start 2P', cursive"
      }}>
        Showing {filteredAndSortedPlants.length} of {plants.length} plants
      </p>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          fontSize: '11px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <thead>
            <tr style={{ backgroundColor: '#1f2937' }}>
              <th 
                onClick={() => handleSort('name')}
                style={{ 
                  padding: '12px 8px',
                  borderBottom: '2px solid #4ade80',
                  color: '#4ade80',
                  cursor: 'pointer',
                  textAlign: 'left',
                  userSelect: 'none'
                }}
              >
                Plant Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => handleSort('baseValue')}
                style={{ 
                  padding: '12px 8px',
                  borderBottom: '2px solid #4ade80',
                  color: '#4ade80',
                  cursor: 'pointer',
                  textAlign: 'right',
                  userSelect: 'none'
                }}
              >
                Base Value {sortField === 'baseValue' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => handleSort('category')}
                style={{ 
                  padding: '12px 8px',
                  borderBottom: '2px solid #4ade80',
                  color: '#4ade80',
                  cursor: 'pointer',
                  textAlign: 'center',
                  userSelect: 'none'
                }}
              >
                Rarity {sortField === 'category' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => handleSort('type')}
                style={{ 
                  padding: '12px 8px',
                  borderBottom: '2px solid #4ade80',
                  color: '#4ade80',
                  cursor: 'pointer',
                  textAlign: 'center',
                  userSelect: 'none'
                }}
              >
                Type {sortField === 'type' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => handleSort('weight')}
                style={{ 
                  padding: '12px 8px',
                  borderBottom: '2px solid #4ade80',
                  color: '#4ade80',
                  cursor: 'pointer',
                  textAlign: 'right',
                  userSelect: 'none'
                }}
              >
                Weight {sortField === 'weight' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => handleSort('valuePerWeight')}
                style={{ 
                  padding: '12px 8px',
                  borderBottom: '2px solid #4ade80',
                  color: '#4ade80',
                  cursor: 'pointer',
                  textAlign: 'right',
                  userSelect: 'none'
                }}
              >
                Value/Weight {sortField === 'valuePerWeight' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedPlants.map((plant, index) => (
              <tr 
                key={plant.id}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#1f2937' : '#374151'
                }}
              >
                <td style={{ 
                  padding: '10px 8px',
                  borderBottom: '1px solid #4b5563',
                  color: '#d1d5db'
                }}>
                  {plant.name}
                </td>
                <td style={{ 
                  padding: '10px 8px',
                  borderBottom: '1px solid #4b5563',
                  color: '#fbbf24',
                  textAlign: 'right',
                  fontWeight: 'bold'
                }}>
                  {formatNumber(plant.baseValue)}
                </td>
                <td style={{ 
                  padding: '10px 8px',
                  borderBottom: '1px solid #4b5563',
                  textAlign: 'center',
                  color: getCategoryColor(plant.category),
                  fontWeight: 'bold'
                }}>
                  {plant.category}
                </td>
                <td style={{ 
                  padding: '10px 8px',
                  borderBottom: '1px solid #4b5563',
                  color: '#d1d5db',
                  textAlign: 'center'
                }}>
                  {plant.type}
                </td>
                <td style={{ 
                  padding: '10px 8px',
                  borderBottom: '1px solid #4b5563',
                  color: '#d1d5db',
                  textAlign: 'right'
                }}>
                  {plant.weight ? plant.weight.toFixed(2) : 'N/A'}
                </td>
                <td style={{ 
                  padding: '10px 8px',
                  borderBottom: '1px solid #4b5563',
                  color: '#60a5fa',
                  textAlign: 'right',
                  fontWeight: 'bold'
                }}>
                  {plant.weight ? formatNumber(Math.round(plant.baseValue / plant.weight)) : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table legend */}
      <div style={{ 
        marginTop: '16px',
        fontSize: '10px',
        color: '#9ca3af',
        fontFamily: "'Press Start 2P', cursive",
        lineHeight: '1.4'
      }}>
        <p><strong>Legend:</strong></p>
        <p>• Base Value: Original value before modifiers</p>
        <p>• Value/Weight: Efficiency ratio for storage optimization</p>
        <p>• Click column headers to sort • Use filters to narrow results</p>
      </div>
    </div>
  );
}