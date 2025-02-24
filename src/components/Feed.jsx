import React, { useEffect, useState } from "react";
import Resume from "./Resume";
import { BASE_URL } from "../utils/constants";
import axios from 'axios';

const Feed = () => {
  const [resumeData, setResumeData] = useState([]); // Ensure it's an array
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    skills: "",
    tags: "",
    domain: "",
    resumeLink: "",
  });

  const fetchResumes = async () => {
    try {
      const res = await axios.get(BASE_URL + "/resumes", { withCredentials: true });

      let resumeDataArray = (res?.data?.response);

      if (Array.isArray(resumeDataArray)) {
        setResumeData(resumeDataArray);
      } else {
        console.error("Invalid data format:", resumeDataArray);
        setResumeData([]); // Fallback to an empty array
      }

    } catch (error) {
      console.error("Error fetching resumes:", error);
      setResumeData([]); // Ensure it's an array even in case of error
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddResume = async () => {
    const resumeObject = {
      name: formData.name,
      role: formData.role,
      skills: formData.skills.split(",").map((skill) => skill.trim()), // Convert skills to array
      tags: formData.tags.split(",").map((tag) => tag.trim()), // Convert tags to array
      domain: formData.domain,
      resumeLink: formData.resumeLink,
    };

    try {
      const response = await axios.post(BASE_URL + "/resume/add", resumeObject, {
        withCredentials: true,
      });

      console.log("Resume added:", response.data);

      // Refresh resume list
      fetchResumes();

      // Clear the form
      setFormData({
        name: "",
        role: "",
        skills: "",
        tags: "",
        domain: "",
        resumeLink: "",
      });

      // Close modal
      document.getElementById("my_modal_5").close();
    } catch (error) {
      console.error("Error adding resume:", error);
    }
  };


  return (
    <div className="flex flex-col m-10">
      {/* Add Resume Section */}
      <div className="add-resume-section flex flex-col mb-6 items-center">
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="p-3">
          <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add your resume</button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <input type="text" name="name" placeholder="Name (required) " value={formData['name']} onChange={handleInputChange} className="grow" required/>
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <input type="text" name="resumeLink" placeholder="Resume Link (required) " value={formData['resumeLink']} onChange={handleInputChange} className="grow" required />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <input type="text" name="role" placeholder="Role" value={formData['role']}  onChange={handleInputChange} className="grow"  />
                <span className="badge badge-info">Optional</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <input type="text" name="skills" placeholder="Skills" value={formData['skills']} onChange={handleInputChange} className="grow" />
                <span className="badge badge-info">Optional</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <input type="text" name="domain" placeholder="Domain" value={formData['domain']} onChange={handleInputChange} className="grow" />
                <span className="badge badge-info">Optional</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" name="tags" placeholder="Tags" value={formData['tags']} onChange={handleInputChange} className="grow" />
                <span className="badge badge-info">Optional</span>
              </label>
              
              <div className="modal-action flex justify-around">
                {(formData['name'] && formData['resumeLink'] ) && <button onClick={handleAddResume}>Add</button>}
                <form method="dialog">
                  <button>Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {/* Resume List */}
      <div className="flex flex-wrap gap-8 justify-evenly">
        {resumeData.length > 0 ? (
          resumeData.map((resume) => <Resume key={resume.id} resume={resume} />)
        ) : (
          <p className="text-gray-500">No resumes available.</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
