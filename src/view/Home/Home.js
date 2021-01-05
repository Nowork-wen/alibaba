import React, {Component} from 'react';
import './Home.scss'
import Headers from '../../component/Header/Header'
import Search from '../../component/Search/Search'
import Jobvacancy from '../../component/Jobvacancy/Jobvacancy'
import Foot from  '../../component/Foot/Foot'
import logo2 from '../../assets/picture/aliyun.png';
import logo3 from '../../assets/picture/alibabaintelligence.svg';
class Home extends Component {
    render() {
        return (
            <div>
                {/*头部组件*/}
                <Headers/>
                {/*搜索框*/}
                <Search />
                <div className="Jobvacancy_fist_box" style={{width:1180,height:300,margin:"45.5px auto"}}>
                    {/*list列表*/}
                    <Jobvacancy />
                   <div style={{width:310,height:300}}>
                       <a href="#" className="img2">
                           <img className="logo2" src={logo2} alt=""/>
                       </a>
                       <a href="#" className="img3">
                           <img className="logo3" src={logo3} alt=""/>
                       </a>
                   </div>
                </div>
                {/*底部组件*/}
                <Foot />
            </div>
        );
    }
}

export default Home;