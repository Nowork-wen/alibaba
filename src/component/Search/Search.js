import React, { Component } from 'react';
import '../Search/Search.scss'
import picture1 from '../../assets/picture/picture1.png'

class Jobvacancy extends Component {
    state = {
        search:['JAVA','IOS','数据','安全','搜索','算法','运营','视觉','交互','前端',]
    }

    focuss = (e) => {
        e.target.value = " "
    }
    blues = (e) => {
        if (e.target.value === " ") {
            e.target.value = ""
        }

    }
    render() {
        let search =this.state.search
        console.log(search)
        return (
            <div style={{ position: "relative" }}>
                <img src={picture1} alt="" style={{ width: "100%", height: 478 }} />
                <div className="context_box">
                    <div className="search">
                        <div className="search_box">
                            <p className="context_txt1">If not now, when?</p>
                            <p className="context_txt1">If not me, who?</p>
                            <p className="context_txt2">此时此刻，非我莫属！</p>
                            <div style={{ height: 60, backgroundColor: "rgba(255,255,255,0.1)" }}>
                                <input type="text" className="search_input" onFocus={this.focuss} onBlur={this.blues} placeholder="请输入职位关键词" />
                                <input type="button" value="搜索" className="search_button"
                                    style={{ border: "none" }}></input>
                            </div>
                            <div className="search_keyword">
                                <div className="search_keyword_hot">热门搜索：</div>
                                <ul className="search_keyword_list">
                                    {
                                         search.map((item,index)=>{
                                            return <li key={index}><a href='#' className="search_a">{item} </a> </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jobvacancy;