import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceItem = ({ time, field, location, description }) => (
    <div className="work__div border-bottom mb-4">
        <div className="o-time-title mb-2 position-relative o-font-sm">{time}</div>
        <div className="o-title-exp mb-2 d-flex flex-column">
            <strong className="font-weight-normal o-text-purple">{field}</strong>
            <small className="text-muted">{location}</small>
        </div>
        <p className="text-justify o-font-sm">{description}</p>
    </div>
);

class Experiences extends React.Component{

    state = {
        experiences: [
            {id: 1, type: 'work', time: '2020/03 ~ ', field: 'Software Enginner', location: '株式会社hokan', description: '保険業界のアップデートを目指し、InsurTechSaaSを開発しているスタートアップです'},
            {id: 2, type: 'work', time: '2019/03 ~ 2020/03', field: 'Software Enginner', location: 'ランサーズ株式会社', description: 'ソフトウェアエンジニアとして長期のインターンシップを行い、複数のチームでプロダクト開発を行いました'},
            {id: 3, type: 'work', time: '2018/12 ~ 2019/02', field: 'Writer', location: '株式会社prd', description: '自社内の新規メディアの立ち上げに関する業務を行いました'},
            {id: 4, type: 'work', time: '2018/10 ~ 2018/12', field: 'Enginner', location: '株式会社SIVA', description: '自社開発のメディアの開発を行いました'},
            {id: 4, type: 'work', time: '2018/07 ~ 2018/11', field: 'Enginner', location: 'DMMグループ ハッシャダイ株式会社', description: 'YankeeHacker6期生に在籍後、プロコース在籍'},
        ]
    }

    render(){
        return(
            <div className="row">
                <div className="col-12 col-sm-6 col-md-12 col-lg-12 border-right">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaBriefcase /></i>
                        <span className="font-weight-bold">Work Experience</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'work').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Experiences;