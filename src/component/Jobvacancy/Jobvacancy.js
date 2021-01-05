import React, {Component} from 'react';
import axios from 'axios';
import './Jobvacancy.scss'


class Jobvacancy extends Component {
    state = {
        timers: 0
    }
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //Axios 获取假数据
        axios.get('https://www.fastmock.site/mock/51b7f3d0bd146089ea0b9f5924a6f414/lists/alibaba').then((res) => {
            console.log(res.data.list)
            let datas = res.data.list
            let lists = []
            datas.forEach((item, index) => {
                    lists.push(
                        <li className="jobvacancy_title_li" key={index}>
                            <a href="#" className="jobvacancy_title">{item.title}</a>
                            <em className="city">{item.city}</em>
                            <em className="timer">{item.timer ? item.timer >= 60 ? item.timer >= 120 ? "2小时前" : "1小时前" : item.timer + "分钟前" : ""}</em>
                        </li>
                    )
                }
            )
            this.setState({
                lists
            })
        }).catch((err) => {
                console.log(err)
            }
        )
    }
    componentDidUpdate() {
        let box = document.getElementById('heightss')
        this.scrollup()
        box.onmouseover=()=>{
            clearInterval(this.mytimer)
        }
        box.onmouseout=()=>{
            this.scrollup()
        }
    }
    //list滚动（使用ref时，有时候会获取不到属性的值）
    scrollup=()=>{
        let box = document.getElementById('heightss')
       this.mytimer = setInterval(() => {
            let yy = box.offsetTop
            let kk = box.offsetHeight - 250

            if (yy < -kk) {
                box.style.top = "51px"
            } else {
                yy -= 2
                box.style.top = yy + "px"
            }

        }, 90)
    }

    render() {
        return (
            <div className="cancy_box" style={{overflow: "hidden", position: "relative"}}>
                <div className="title_box">
                    <div style={{fontSize: 14}}>最新职位</div>
                    <div style={{fontSize: 14}}>更多</div>
                </div>
                <ul id="heightss" style={{overflow: "hidden", position: "absolute", top: "51px"}} >
                    {this.state.lists}
                </ul>
            </div>
        );
    }
}

export default Jobvacancy;