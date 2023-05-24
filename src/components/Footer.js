/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
const styles = {
    flex: {
        display: 'flex',
        justifyContent: 'space-around',
    }
}


export default function Footer() {
    return (
        <footer style={styles.flex} className="footer fixed-bottom ">
            <a href="#">(555) 555-5555</a>
            <a href="#">coc.lay97@gmail.com</a>
            <a href="#">My github</a>
        </footer>
    )
}