import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme,ThemeProvider} from '@material-ui/core';

const darkTheme=createMuiTheme({
    palette:{
        type:"dark",
    },
})

const CustomPagination = ({setPage,numofPages=10}) => {
    const handleChangePage=(page)=>{
        setPage(page);
        window.scroll(0,0);
    };
    return (
        <div style={{
            width:'100%',
            display:"flex",
            justifyContent:'center',
            marginTop:10
        }}>
            <ThemeProvider theme={darkTheme}>
            <Pagination count={numofPages} 
            onChange={(e)=>handleChangePage(e.target.textContent)}
            hideNextButton
            hidePrevButton
            color="primary"></Pagination>
            </ThemeProvider>
          
        </div>
    )
}

export default CustomPagination
