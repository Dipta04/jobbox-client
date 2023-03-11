import React from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {

  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobsQuery();

  return (
    <div className='pt-14'>
      <div className='bg-primary/10 p-5 rounded-2xl'>
        <h1 className='font-semibold text-xl'>Find Jobs</h1>
      </div>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        {
          data?.data?.map((jobData) => <JobCard jobData={jobData}></JobCard>)
        }
      </div>
    </div>
    // <div className="px-32 py-14">
    //   <h1>This is job page</h1>
    //   <div>
    //     {
    //       data?.data?.map(({ position, companyName, _id }) => (<div>
    //         <h1>{position}</h1>
    //         <p>{companyName}</p>
    //         <button onClick={() => navigate(`/job-details/${_id}`)}>Details</button>
    //       </div>
    //       ))}
    //   </div>
    // </div>
  );
};

export default Jobs;
