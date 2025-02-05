// TableComponent.test.js
import { render, screen } from '@testing-library/react';
import { TableComponent } from '../components/Table';

describe('TableComponent', () => {
  it('should render the table with the data', () => {
    const mockFiles = [
      {
        file: 'test1.csv',
        lines: [
          { text: 'test1', number: '123', hex: 'abc123' },
          { text: 'test2', number: '456', hex: 'def456' },
        ],
      },
      {
        file: 'test2.csv',
        lines: [
          { text: 'test3', number: '789', hex: 'ghi789' },
        ],
      },
    ];
    render(<TableComponent files={mockFiles} />);

    expect(screen.getAllByText('test1.csv')[0]).toBeInTheDocument();
    expect(screen.getAllByText('test2.csv')[0]).toBeInTheDocument();
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('abc123')).toBeInTheDocument();
    expect(screen.getByText('test2')).toBeInTheDocument();
    expect(screen.getByText('456')).toBeInTheDocument();
    expect(screen.getByText('def456')).toBeInTheDocument();
    expect(screen.getByText('test3')).toBeInTheDocument();
    expect(screen.getByText('789')).toBeInTheDocument();
    expect(screen.getByText('ghi789')).toBeInTheDocument();
  });

  it('should render the table with no data found', () => {
    render(<TableComponent files={[]} />);

    expect(screen.getByText('No data found')).toBeInTheDocument();
  });
});
