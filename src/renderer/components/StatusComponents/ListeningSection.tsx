import React from "react";

function ListeningSection(){
    return(
        <>
        <div className="container">
           <div>
           <p className="target-text"><span className="small-text">Listening at </span><br></br>Target folder path</p>
           <p className="path">C:/Users/SARTHAK/Downloads</p>
           </div>
            <style>{`
            *{
            padding-top:0;
            margin-top: 0}
            .container{
            background-color : white;
            border-radius: 8px;
            height: max-content;
            margin-bottom:10px;
            width: 20%;
            }
            h3{
            color:black;
            }
            .path{
            font-size: 0.8rem;
            display:flex;
            word-break: break-all;
            font-weight: semi-bold;
            }
            .small-text{
            font-size: 0.9rem;
            color:black;
            }
            .target-text{
            font-size: 1.2rem;
            font-weight: bold; 
            color:green
}
            `}</style>
        </div>
        </>
    )
}

export default ListeningSection;