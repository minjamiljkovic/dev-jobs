import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import jobs from '../../data/data';
const JobList = () => {
    const [data, setData] = useState(jobs);
    const filterData = e=> {
        const filterValue = e.target.value 
        if (filterValue === 'full-time') {
            const filteredData = jobs.filter(job=> job.contract === 'Full Time')
            setData(filteredData)
        }
        else if( filterValue === 'part-time') {
            const filteredData = jobs.filter(job=> job.contract === 'Part Time')
            setData(filteredData)
        }
        else if( filterValue === 'freelance') {
            const filteredData = jobs.filter(job=> job.contract === 'Freelance')
            setData(filteredData)
        }else if( filterValue === 'contract') {
            const filteredData = jobs.filter(job=> job.contract === 'Contract')
            setData(filteredData)
        } else {
            setData(jobs);
        }
    }
  return <section className="job_list">
    <div className="container">
        <div className="job_list_wrapper">
            <div className="search_panel">
                <div className="search_panel_tc">
                    <AiOutlineSearch className="sp"/>
                    <input className="in" type="text" placeholder='Search by title, companies' />
                </div>
                <div className="search_panel_map">
                    <BiMap className="spp"/>
                    <input className="in" type="text" placeholder='Search by location' />
                    <button className="btn" >Search</button>
                </div>
                <div className="search_panel_time">
                   <select onChange={filterData}>
                    <option>Filter job by</option>                    
                    <option value="full-time">full time</option>
                    <option value="part-time">part-time</option>
                    <option value="freelance">freelance</option>
                    <option value="contract">contract</option>


                   </select>
                </div>
            </div>
            <div className="jobs_wrapper">
            {
                       data?.map((item) => (
                            <div className="job_item" key={item.id}>
                              <img src={item.logo} alt="" />
            
                              <div className="job_content">
                                <h6>
                                  {item.postedAt} - {item.contract}
                                </h6>
                                <h1>
                                  <Link to={`/jobs/${item.position}`}>{item.position}</Link>
                                </h1>
                                <p>{item.company}</p>
            
                                <div className="location">
                                  <p>
                                    Location: <span>{item.location}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                    }
                
            </div>
        </div>
    </div>
  </section>
}

export default JobList

//app.css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}

body {
  font-family: "Fredoka", sans-serif;
}

h1,
h2 {
  font-size: 1.3rem;
  font-weight: 500;
  color: #000;
}

.btn {
  background: #7c5dfa;
  padding: 7px 25px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
}

p {
  color: #777;
  font-weight: 400;
  font-size: 0.9rem;
}

.header {
  width: 100%;
  height: 150px;
  line-height: 150px;
  background: #7c5dfa;
  border-radius: 0px 0px 0px 50px;
  margin: -300px 0 0 0;
}

.container {
  max-width: 1140px;
  margin: 30px 15px;
}

.header h1 {
  color: #fff;
  margin: 10px;
  padding: 10px;
}

.job_list_wrapper{
  padding: 20px;
  margin-top: -70px;
  margin-left: 50px;
  background: #fff;
  border-radius: 10px;
}
.search_panel{
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.search_panel_tc, .search_panel_map{
display: flex;

align-items: center;
column-gap: 0.8rem;
border: 1px solid #ddd;
border-radius: 5px;
outline: none;
}
.search_panel_tc{
  padding: 15px 25px;
  margin: 0 20px;
}
.search_panel_map{
  padding: 10px 25px;
  margin: 0 20px;


}
.sp {
  padding: 0;
  margin: 0;
  width: 20px;
  color: #7c5dfa;
}
.spp {
  padding: 0;
  margin: 0;
  width: 40px;
  color: #7c5dfa;

}
.search_panel_time {
  padding: 15px 5px;
  margin: 0 25px;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 5px;
}
.in{
  border: none;
  outline: none;
  color: #000;
  font-size: 0.9rem;
}
.jobs_wrapper{
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.job_item{
  width: 350px;
  margin-bottom: 50px;
}
.job_item img {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}
.job_content h6 {
  font-size: 0.9rem;
  font-weight: 400;
  color: #777;
  margin-bottom: 10px;
}
.job_content h1 {
  margin-bottom: 10px;
}

.job_content h1 a {
  text-decoration: none;
  color: #000;
}

.location p {
  margin-top: 30px;
}

.location p span {
  color: #7c5dfa;
}