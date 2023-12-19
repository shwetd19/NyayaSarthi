import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import axios, { AxiosResponse } from "axios";

const FinalForm = () => {
  const [formData, setFormData] = useState({
    district: "",
    establishment: "",
    natureOfCase: "",
    reliefSought: "",
    caseType: "",
    plaintiff: "",
    contactNo: "",
    petitioner: "",
    gender: "",
    relation: "",
    dob: "",
    age: 0,
    case: "",
    petitionerCount: 0,
    email: "",
    occupation: "",
    mobile: 0,
    pinCode: "",
    address: "",
    state: "",
    district2: "",
    taluka: "",
    village: "",
    Responder: "",
    gender2: "",
    relation2: "",
    dob2: "",
    age2: 0,
    case2: "",
    petitionerCount2: 0,
    email2: "",
    occupation2: "",
    mobile2: 0,
    pinCode2: "",
    address2: "",
    state2: "",
    district3: "",
    taluka2: "",
    village2: "",
    causeOfAction: "",
    dateOfCauseOfAction: "",
    importantInfo: "",
    prayer: "",
    valuation: "",
    selectedState: "",
    selectedDistrict: "",
    selectedTaluka: "",
    selectedVillage: "",
    act: "",
    section: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Update form data for gender
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const sendDataToBackend = async (data: any) => {
    try {
      const response: AxiosResponse<any> = await axios.post(
        "https://your-backend-url.com/submitFormData",
        data
      );
      console.log("Data sent to the backend:", response.data);
    } catch (error: any) {
      console.error("Error sending data to the backend:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    sendDataToBackend(formData);
  };
  return (
    <div>
      <div className="p-5">
        <Tab.Group>
          <Tab.List className="flex gap-4">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`py-2 px-4 rounded ${
                    selected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } focus:outline-none`}
                >
                  Initial Input
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`py-2 px-4 rounded ${
                    selected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } focus:outline-none`}
                >
                  Petitioner Details
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`py-2 px-4 rounded ${
                    selected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } focus:outline-none`}
                >
                  Responder Details
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`py-2 px-4 rounded ${
                    selected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } focus:outline-none`}
                >
                  Case Details
                </button>
              )}
            </Tab>
          </Tab.List>

          <form>
            <Tab.Panels>
              <Tab.Panel>
                <div className="p-4 bg-gray-100 rounded">
                  <div className="space-y-5">
                    {/* <div className=" bg-cyan-50 textcolo">
                <h1>District/Establishment</h1>
            </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="district">district</label>
                        <select
                          id="district"
                          className="form-select text-white-dark"
                          value={formData.district}
                          onChange={handleInputChange}
                        >
                          <option>Choose...</option>
                          <option>State1</option>
                          <option>State2</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="establishment">Establishment</label>
                        <select
                          id="establishment"
                          className="form-select text-white-dark"
                          value={formData.establishment}
                          onChange={handleInputChange}
                        >
                          <option>Choose...</option>
                          <option>State1</option>
                          <option>State2</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="natureOfCase">Nature of Case</label>
                        <select
                          id="natureOfCase"
                          className="form-select text-white-dark"
                          value={formData.natureOfCase}
                          onChange={handleInputChange}
                        >
                          <option>Choose...</option>
                          <option>State1</option>
                          <option>State2</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="reliefSought">Relief Sought</label>
                      <input
                        id="reliefSought"
                        type="text"
                        placeholder="Relief Sought"
                        className="form-input"
                        value={formData.reliefSought}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="caseType">Case Type</label>
                      <input
                        id="caseType"
                        type="text"
                        placeholder="Case Type"
                        className="form-input"
                        value={formData.caseType}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="plaintiff">Plaintiff</label>
                      <input
                        id="plaintiff"
                        type="text"
                        placeholder="Plaintiff"
                        className="form-input"
                        value={formData.plaintiff}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="contactNo">Contact No.</label>
                      <input
                        id="contactNo"
                        type="text"
                        placeholder="Contact No."
                        className="form-input"
                        value={formData.contactNo}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="p-4 bg-gray-100 rounded">
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="petitioner">Petitioner:</label>
                        <input
                          id="petitioner"
                          type="text"
                          placeholder="Petitioner Name"
                          className="form-input"
                          value={formData.petitioner}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="gender">Gender:</label>
                        <input
                          id="gender"
                          type="text"
                          placeholder="Petitioner Name"
                          className="form-input"
                          value={formData.gender}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="relation">Relation</label>
                      <input
                        id="relation"
                        type="text"
                        placeholder="Relation"
                        className="form-input"
                        value={formData.relation}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="dob">Date of Birth</label>
                      <input
                        id="dob"
                        type="date"
                        className="form-input"
                        value={formData.dob}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      <div className="md:col-span-2">
                        <label htmlFor="age">Age:</label>
                        <input
                          id="age"
                          type="number"
                          placeholder="Enter Age"
                          className="form-input"
                          value={formData.age}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="case">Case</label>
                        <input
                          id="case"
                          type="text"
                          placeholder="Enter case"
                          className="form-input"
                          value={formData.case}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="petitionerCount">
                          Extra Petitioner Count
                        </label>
                        <input
                          id="petitionerCount"
                          type="number"
                          placeholder="Extra Petitioner Count"
                          className="form-input"
                          value={formData.petitionerCount}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email">Email:</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email Name"
                        className="form-input"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="occupation">Occupation:</label>
                      <input
                        id="occupation"
                        type="text"
                        placeholder="Occupation"
                        className="form-input"
                        value={formData.occupation}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="mobile">Mobile no:</label>
                      <input
                        id="mobile"
                        type="number"
                        placeholder="Mobile no"
                        className="form-input"
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="pinCode">Pin Code:</label>
                        <input
                          id="pinCode"
                          type="text"
                          placeholder="Pin Code"
                          className="form-input"
                          value={formData.pinCode}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="address">Address</label>
                        <textarea
                          id="address"
                          placeholder="Address"
                          className="form-input"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="state">State:</label>
                        <input
                          id="state"
                          type="text"
                          placeholder="State"
                          className="form-input"
                          value={formData.state}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="district2">District:</label>
                        <input
                          id="district2"
                          type="text"
                          placeholder="District"
                          className="form-input"
                          value={formData.district2}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="taluka">Taluka:</label>
                        <input
                          id="taluka"
                          type="text"
                          placeholder="Taluka"
                          className="form-input"
                          value={formData.taluka}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="village">Village:</label>
                        <input
                          id="village"
                          type="text"
                          placeholder="Village"
                          className="form-input"
                          value={formData.village}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="p-4 bg-gray-100 rounded">
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="Responder">Responder:</label>
                        <input
                          id="Responder"
                          type="text"
                          placeholder="Responder Name"
                          className="form-input"
                          value={formData.Responder}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="gender2">Gender:</label>
                        <input
                          id="gender2"
                          type="text"
                          placeholder="Responder Name"
                          className="form-input"
                          value={formData.gender2}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="relation2">Relation</label>
                      <input
                        id="relation2"
                        type="text"
                        placeholder="Relation"
                        className="form-input"
                        value={formData.relation2}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="dob2">Date of Birth</label>
                      <input
                        id="dob2"
                        type="date"
                        className="form-input"
                        value={formData.dob2}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      <div className="md:col-span-2">
                        <label htmlFor="age2">Age:</label>
                        <input
                          id="age2"
                          type="number"
                          placeholder="Enter Age"
                          className="form-input"
                          value={formData.age2}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="case2">Case</label>
                        <input
                          id="case2"
                          type="text"
                          placeholder="Enter case"
                          className="form-input"
                          value={formData.case2}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="petitionerCount2">
                          Extra Petitioner Count
                        </label>
                        <input
                          id="petitionerCount2"
                          type="number"
                          placeholder="Extra Petitioner Count"
                          className="form-input"
                          value={formData.petitionerCount2}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email2">Email:</label>
                      <input
                        id="email2"
                        type="email"
                        placeholder="Email Name"
                        className="form-input"
                        value={formData.email2}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="occupation2">Occupation:</label>
                      <input
                        id="occupation2"
                        type="text"
                        placeholder="Occupation"
                        className="form-input"
                        value={formData.occupation2}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="mobile2">Mobile no:</label>
                      <input
                        id="mobile2"
                        type="number"
                        placeholder="Mobile no"
                        className="form-input"
                        value={formData.mobile2}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="pinCode2">Pin Code:</label>
                        <input
                          id="pinCode2"
                          type="text"
                          placeholder="Pin Code"
                          className="form-input"
                          value={formData.pinCode2}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="address2">Address</label>
                        <textarea
                          id="address2"
                          placeholder="Address"
                          className="form-input"
                          value={formData.address2}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="state2">State:</label>
                        <input
                          id="state2"
                          type="text"
                          placeholder="State"
                          className="form-input"
                          value={formData.state2}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="district3">District:</label>
                        <input
                          id="district3"
                          type="text"
                          placeholder="District"
                          className="form-input"
                          value={formData.district3}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="taluka2">Taluka:</label>
                        <input
                          id="taluka2"
                          type="text"
                          placeholder="Taluka"
                          className="form-input"
                          value={formData.taluka2}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="village2">Village:</label>
                        <input
                          id="village2"
                          type="text"
                          placeholder="Village"
                          className="form-input"
                          value={formData.village2}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="p-4 bg-gray-100 rounded">
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="causeOfAction">Cause of Action</label>
                        <input
                          id="causeOfAction"
                          type="text"
                          placeholder="Enter Cause of Action"
                          className="form-input"
                          value={formData.causeOfAction}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="dateOfCauseOfAction">
                          Date of Cause of Action
                        </label>
                        <input
                          id="dateOfCauseOfAction"
                          type="date"
                          placeholder="Enter Date of Cause of Action"
                          className="form-input"
                          value={formData.dateOfCauseOfAction}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="importantInfo">
                        Important Information
                      </label>
                      <input
                        id="importantInfo"
                        type="text"
                        placeholder="Enter Important Information / Subject / Reason"
                        defaultValue=""
                        className="form-input"
                        value={formData.importantInfo}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="prayer">Prayer</label>
                        <input
                          id="prayer"
                          type="text"
                          placeholder="Enter Prayer"
                          className="form-input"
                          value={formData.prayer}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="valuation">Valuation</label>
                        <input
                          id="valuation"
                          type="number"
                          placeholder="Enter Valuation"
                          className="form-input"
                          value={formData.valuation}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="selectedState">State</label>
                        <select
                          id="selectedState"
                          className="form-select text-white-dark"
                          value={formData.selectedState}
                          onChange={handleInputChange}
                        >
                          <option>Choose...</option>
                          <option>State1</option>
                          <option>State2</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="selectedDistrict">District</label>
                        <select
                          id="selectedDistrict"
                          className="form-select text-white-dark"
                          value={formData.selectedDistrict}
                          onChange={handleInputChange}
                        >
                          <option>Choose...</option>
                          <option>District1</option>
                          <option>District2</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="selectedTaluka">Taluka</label>
                        <select
                          id="selectedTaluka"
                          className="form-select text-white-dark"
                          value={formData.selectedTaluka}
                          onChange={handleInputChange}
                        >
                          <option>Choose...</option>
                          <option>Taluka1</option>
                          <option>Taluka2</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="selectedVillage">Village</label>
                        <select
                          id="selectedVillage"
                          className="form-select text-white-dark"
                          value={formData.selectedVillage}
                          onChange={handleInputChange}
                        >
                          <option>Choose...</option>
                          <option>Village1</option>
                          <option>Village2</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="act">Act</label>
                      <input
                        id="act"
                        type="text"
                        placeholder="Enter Act"
                        className="form-input"
                        value={formData.act}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="gridPassword">Section</label>
                      <input
                        id="gridPassword"
                        type="text"
                        placeholder="Enter Section"
                        className="form-input"
                        value={formData.section}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary !mt-6">
                      Submit
                    </button>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </form>
        </Tab.Group>
      </div>
    </div>
  );
};

export default FinalForm;
