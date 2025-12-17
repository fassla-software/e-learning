const RoundedTable = ({ headers, data }) => {
    const styles = {
        wrapper: {
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #A8A8A8',
            backgroundColor: '#fff',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
            fontFamily: 'inherit',
            textAlign: 'right',
            direction: 'rtl',
        },
        th: {
            padding: '10px',
            backgroundColor: '#E5E5E5',
            fontWeight: '600',
            borderBottom: '1px solid #A8A8A8',
        },
        td: {
            padding: '10px',
            backgroundColor: '#F0F0F0',
            borderBottom: '1px solid #A8A8A8',
        },
    };

    return (
        <div style={styles.wrapper} className="overflow-x-auto">
            <table style={styles.table} className="min-w-full">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                style={{
                                    ...styles.th,
                                    borderRight: index === headers.length - 1 ? 'none' : styles.th.borderRight,
                                }}
                                className="text-sm md:text-lg lg:text-xl font-semibold"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    style={{
                                        ...styles.td,
                                        borderRight: cellIndex === row.length - 1 ? 'none' : styles.td.borderRight,
                                        borderBottom: rowIndex === data.length - 1 ? 'none' : styles.td.borderBottom,
                                    }}
                                    className="text-xs md:text-base lg:text-lg"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoundedTable;