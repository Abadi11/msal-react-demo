import React, { Component }  from 'react';
import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";

export const PageLayout = (props) => {
    return (
        <>
            <NavBar />
            <br />
            <Typography variant="h5">
                <center>Welcome to the Microsoft Authentication Library For React Quickstart</center>
            </Typography>
            <br />
            {props.children}
        </>
    );
};