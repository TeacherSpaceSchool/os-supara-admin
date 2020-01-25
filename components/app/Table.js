import React from 'react';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

let getMuiTheme = () => createMuiTheme({
    overrides: {
        MUIDataTableBodyCell: {
            root: {
                textOverflow: 'ellipsis',
                maxHeight: '500px',
                maxWidth: '200px',
                overflow: 'hidden',
                wordWrap: 'break-word'
            }
        },
        MuiPaper: {
            root: {
                minWidth: '100%'
            },
            elevation4:{
                boxShadow: 'none'
            }
        }

    }
})

const MyTable =  React.memo(
    (props) =>{
        const { columns, row } = props;
        let data = row.map(row=>row.data)
        const options = {
            customSort: (data, colIndex, order) => {
                data = data.sort(function(a, b) {
                    return order==='desc'?
                        parseInt(b.data[colIndex]) - parseInt(a.data[colIndex])
                        :
                        parseInt(a.data[colIndex]) - parseInt(b.data[colIndex])
                });
                return data
            },
            selectableRows: 'none',
            print: false,
            pagination: false,
            count: data.length,
            downloadOptions: {filename: 'tableDownload.csv', separator: ','},
            onCellClick: (colData, colMeta) => {
                if(colMeta.colIndex===0&&row[colMeta.rowIndex]._id)
                    window.open(`/client/${row[colMeta.rowIndex]._id}`,'_blank');
            },
        };
        return (
            <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    data={data}
                    columns={columns}
                    options={options}
                />
            </MuiThemeProvider>
        );
    }
)

export default MyTable;