import React, { Component } from 'react'
import Input from '../Inupt/Input';

import './dynamic.css';


export default class dynamic extends Component {
    state = {
        rows: 9,
        columns: [
            "فروشنده",
            "قیمت",
            "موجودی",
            "وزن",
            "رنگ",

        ],

        data: [[]]

    }


    addCol = (colName) => {
        let isDuplicate = false;
        let duplication = this.state.columns.map(col => {
            return (col === colName);
        })
        duplication.forEach(element => {
            if (element === true) {
                isDuplicate = true;
                return;
            }
        });
        if (isDuplicate) {
            alert("قبلا موجود است")
            return;

        }
        if (colName.trim() === "") {
            alert("نام ستون جدید را وارد کنید ");
            return;
        }

        const oldColumns = [...this.state.columns]
        /*    console.log(oldColumns);
   
           console.log(oldColumns.length - 3); */
        //splice doent return new array !!!
        oldColumns.splice(- 3, 0, colName)
        /* console.log(newColumns);
  */
        this.setState({
            //splice doent return new array !!!
            columns: oldColumns//newColumns
        })
        /*        setTimeout(() => {
                   console.log(this.state.columns);
       
               }, 2000) */

    }

    addNewRow = () => {
        this.setState(prevState => {
            return {

                rows: prevState.rows + 1
            }
        })
    }

    render() {


        let rows = [];
        const theads = this.state.columns.map(h => {
            return <th key={h}>{h}</th>
        })

        for (let j = 0; j <= this.state.rows; j++) {
            rows[j] = this.state.columns.map((col, index) => {


                return <td key={j + Math.random(j)}> <Input id={(j + 1) + "__" + (index + 1)} value="" onChange={() => { }} /></td>;
            })



        }



        return (
            <React.Fragment>
                <h3> برای من ستونی با نام
                     <input id="newColName" />
                      اضافه کن
                       <button onClick={() => this.addCol(document.getElementById("newColName").value)}
                    >
                        اضافه کن
                           </button>
                </h3>
                <h3>
                    برای من ردیف جدیدی اضافه کن
                    <button
                        onClick={this.addNewRow}
                    >
                        افزودن
                    </button>
                </h3>
                <div className="container">

                    <table>
                        <thead>

                            <tr>

                                {theads}

                            </tr>
                        </thead>
                        <tbody>



                            {rows.map(r => {
                                return (<tr key={Math.random()}>{r}</tr>)
                            })}


                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
