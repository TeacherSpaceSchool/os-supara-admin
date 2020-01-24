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
            sort: false,
            selectableRows: 'none',
            print: false,
            rowsPerPageOptions: [],
            count: data.length,
            downloadOptions: {filename: 'tableDownload.csv', separator: ','},
            responsive: 'scrollMaxHeight',
            onCellClick: (colData, colMeta) => {
                if(colMeta.colIndex===0)
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