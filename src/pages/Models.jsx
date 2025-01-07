import ModelLayout from "../context/ModelLayout";
import ShinyText from "../ui/ShinyText";
import Tracingbeam from '../ui/Tracing-beam';
import Button from '../ui/Button';
import models from "../db/models";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Models() {
  
  // DIALOG BOX CONTENT

  const dialog = [
    { name: 'BMW i', id: 1, value: 'BMW-i' },
    { name: 'X', id: 2, value: 'X' },
    { name: 'M', id: 3, value: 'M' },
    { name: '7', id: 4, value: '7' },
    { name: '6', id: 5, value: '6' },
    { name: '3', id: 6, value: '3' },
    { name: '2', id: 7, value: '2' },
    { name: 'Z4', id: 8, value: 'Z4' },
  ];

  // DIALOG BOX SECOND CONTENT
  const secDialog = [
    { name: 'PETROL', id: 1, value: 'PETROL' },
    { name: 'PLUG-IN HYBRID', id: 2, value: 'PLUG-IN HYBRID' },
    { name: 'DIESEL', id: 3, value: 'DIESEL' },
    { name: 'FULL ELECTRIC', id: 4, value: 'FULL-ELECTRIC' }
  ];

  // States to manage the dialog visibility and selected filters
  const [showDialog, setShowDialog] = useState(false);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);

  const navigate = useNavigate();

  // Handle dialog toggle
  const handleButtonClick = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  // Handle checkbox state changes for Bodytype
  const handleModelChange = (value) => {
    setSelectedModels((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Handle checkbox state changes for Fuel type
  const handleFuelTypeChange = (value) => {
    setSelectedFuelTypes((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Handle "See Results" button click - Update the URL with filters
  const handleSeeResults = () => {
    const modelFilter = selectedModels.join(',');
    const fuelTypeFilter = selectedFuelTypes.join(',');

    const queryParams = new URLSearchParams();
    if (modelFilter) queryParams.append('model', modelFilter);
    if (fuelTypeFilter) queryParams.append('fuelType', fuelTypeFilter);

    // Navigate to the results page with the query parameters
    navigate(`/models/filter?${queryParams.toString()}`);
  };

  // Reset selected filters
  const handleResetFilters = () => {
    setSelectedModels([]);
    setSelectedFuelTypes([]);
  };

  // Filter models based on selected filters
  const filteredModels = models.filter((filterModel) => {
    const modelSelected = selectedModels.length === 0 || selectedModels.includes(filterModel.model);
    const fuelTypeSelected = selectedFuelTypes.length === 0 || selectedFuelTypes.includes(filterModel.title);

    return modelSelected && fuelTypeSelected;
  });

  return (
    <div className="w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="w-11/12 flex flex-col items-center justify-center">
        <div className='w-full flex items-center justify-start py-5'>
          <ShinyText
            disabled={false}
            speed={3}
            text={"LET'S FIND YOUR BMW"}
            className="text-6xl font-bold"
          />
        </div>

        <div className='w-full flex items-center justify-start py-5'>
          <h3 className="text-4xl dark:text-white text-white font-semibold">MODEL FILTER</h3>
        </div>

        {/* DIALOG BOX */}
        <div className='w-full flex items-center justify-start py-5 flex-wrap'>
          <Button
            className="border-t border-white/65 rounded-sm border-b text-white/65 dark:text-white/65 px-8 py-4"
            text="Show more filters"
            onClick={handleButtonClick}
          />
        </div>

        <div className='w-full flex items-center justify-start py-5 flex-wrap'>
          <h4 className="text-2xl font-semibold dark:text-white text-white">
            ({filteredModels.length}) Vehicles found
          </h4>
        </div>
      </div>

      {showDialog && (
        <div data-aos="zoom-out"
          data-aos-duration="1000"
          className="w-full fixed top-0 mx-auto flex items-center justify-center bg-transparent z-[999]"
        >
          <div className="w-3/4 h-screen relative top-10 p-5 bg-white rounded-md shadow-lg overflow-auto md:h-auto">
            <div className='flex flex-col flex-wrap'>
              <h3 className="p-5 text-xl font-medium">FILTER</h3>
              <h5 className='p-5 text-xl font-medium'>Body type</h5>
            </div>

            <div className='w-full flex flex-col items-start justify-start md:flex-wrap md:flex-row md:pl-20'>
              {dialog.map((nexbox) => {
                const { name, id, value } = nexbox;
                return (
                  <div className='w-1/2 flex flex-wrap flex-col py-3 container' key={id}>
                    <label className="inline-flex items-start">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-500 h-6 w-6"
                        checked={selectedModels.includes(value)}
                        onChange={() => handleModelChange(value)}
                      />
                      <span className="ml-2">{name}</span>
                    </label>
                  </div>
                );
              })}
            </div>

            <div className='flex flex-col flex-wrap'>
              <h5 className="p-5 text-xl font-medium">Fuel type</h5>
            </div>

            <div className='w-full flex flex-wrap flex-col items-center justify-start md:flex-wrap md:flex-row md:pl-20'>
              {secDialog.map((newsec) => {
                const { name, id, value } = newsec;
                return (
                  <div className='w-full flex flex-wrap flex-col py-3 md:w-1/2' key={id}>
                    <label className="inline-flex items-start">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-500 h-6 w-6"
                        checked={selectedFuelTypes.includes(value)}
                        onChange={() => handleFuelTypeChange(value)}
                      />
                      <span className="ml-2">{name}</span>
                    </label>
                  </div>
                );
              })}
            </div>
            <hr />

            <div className="w-full flex items-center justify-center">
              <div className='w-full flex flex-col items-center py-5 md:gap-5 md:flex-row'>
                <div className="w-full flex items-center justify-center md:w-auto md:justify-start">
                  {/* RESULT BUTTON */}
                  <Button
                    onClick={handleSeeResults}
                    className="w-full px-8 py-4 border border-black hover:border-2 rounded-sm md:w-auto"
                    text={`See Results (${filteredModels.length} vehicles found)`}
                    />
                </div>
                {/* RESET BUTTON */}
                <div className='w-full flex items-center justify-center py-5 md:w-auto md:justify-start'>
                  <Button
                    onClick={handleResetFilters}
                    text="Reset Filters"
                    className="w-full px-8 py-4 border border-black hover:border-2 rounded-sm md:w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className='h-28 absolute top-0 right-0 w-1/5 flex items-center justify-center'>
              <Button
                onClick={handleDialogClose}
                text=""
                className="flex items-center justify-center h-10 w-10 text-2xl"
                icon={<IoMdClose />}
              />
            </div>
          </div>
        </div>
      )}
      <Tracingbeam
        className="w-11/12 flex flex-wrap items-center justify-center"
      >
        <ModelLayout />
      </Tracingbeam>
    </div>
  );
}

export default Models;
