
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Upload, Camera, Info, Search, Droplet, CloudRain } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const WetContent = ({
  selectedImage,
  setSelectedImage,
  results,
  setResults,
  loading,
  setLoading,
  toast,
  handleFileUpload,
  handleCameraCapture,
  identifyPlant,
}) => (
  <>
    <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Droplet className="text-green-500" size={20} /> Wet Waste Plant Identifier
      </h2>
      {/* File upload and camera */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="image-upload-wet" className="cursor-pointer">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition">
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Click to upload an image</p>
              </div>
              <input
                type="file"
                id="image-upload-wet"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
          <div className="flex-1">
            <Button
              onClick={handleCameraCapture}
              variant="outline"
              className="w-full h-full border-2 border-dashed border-gray-300"
            >
              <Camera className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Use camera</p>
            </Button>
          </div>
        </div>
        {selectedImage && (
          <div className="mt-4">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected plant"
                className="w-full h-64 object-cover rounded-lg"
              />
              <Button
                onClick={() => setSelectedImage(null)}
                variant="secondary"
                size="sm"
                className="absolute top-2 right-2"
              >
                Remove
              </Button>
            </div>
            <Button
              onClick={identifyPlant}
              className="w-full mt-4 bg-green-600 hover:bg-green-700"
              disabled={loading}
            >
              {loading ? "Identifying..." : "Identify Plant"}
              {!loading && <Search className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        )}
      </div>
    </div>
    {/* Results */}
    <div className="w-full md:w-1/2">
      {results ? (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-2">{results.name}</h2>
          <p className="italic text-gray-600 mb-4">{results.scientificName}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Family</p>
              <p className="font-medium">{results.family}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Type</p>
              <p className="font-medium">{results.type}</p>
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">About this Plant</h3>
          <p className="text-gray-700 mb-4">{results.description}</p>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h3 className="font-semibold text-lg mb-2">Ecological Value</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-blue-800">Environmental Impact</p>
                  <p className="text-gray-700">{results.ecoValue}</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-green-800">Carbon Capture</p>
                  <p className="text-gray-700">{results.carbonCapture}</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-amber-600 mt-1" />
                <div>
                  <p className="font-medium text-amber-800">Care Instructions</p>
                  <p className="text-gray-700">{results.care}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col items-center justify-center text-center">
          <Search className="h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-600">No Plant Identified Yet</h3>
          <p className="text-gray-500 mt-2">Upload or capture an image to identify plants and learn about their ecological value.</p>
        </div>
      )}
    </div>
  </>
);

const DryContent = () => (
  <div className="w-full flex flex-col items-center justify-center min-h-[400px] bg-white rounded-xl shadow-md p-10">
    <CloudRain className="text-blue-500" size={40} />
    <h2 className="text-xl font-bold text-green-700 mt-3 mb-2">Dry Waste Plant Identification</h2>
    <p className="text-gray-500 max-w-md mb-2">
      This section will soon help you identify plants and eco-data from "dry waste" images and samples.
    </p>
    <p className="text-gray-400 text-sm">
      (Coming soon: Upload a dry leaf or branch image to get insights)
    </p>
  </div>
);

const Identify = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("wet");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    toast({
      title: "Camera feature",
      description: "Camera functionality will be available soon.",
      duration: 3000,
    });
  };

  const identifyPlant = () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please upload or capture an image first.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setResults({
        name: "European Beech (Fagus sylvatica)",
        scientificName: "Fagus sylvatica",
        family: "Fagaceae",
        type: "Deciduous tree",
        description: "European beech is a large deciduous tree that can reach up to 50 m in height. It has a typical lifespan of 150-300 years, though some specimens can live much longer. The bark is smooth, thin and grey in color.",
        ecoValue: "High environmental value. Supports many species of wildlife and insects.",
        carbonCapture: "High - approximately 5.7 kg of CO2 per year for a mature tree.",
        care: "Prefers well-drained soil, needs regular watering but established trees are drought tolerant.",
      });
      setLoading(false);
      toast({
        title: "Plant identified",
        description: "We've identified your plant successfully!",
        duration: 3000,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-green-700">Plant Identifier</h1>
          <p className="text-gray-600">Upload or capture an image to identify plants and learn about their ecological value</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={tab} onValueChange={setTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="wet" className="flex items-center gap-1">
              <Droplet size={18} className="text-green-600" /> Wet Waste
            </TabsTrigger>
            <TabsTrigger value="dry" className="flex items-center gap-1">
              <CloudRain size={18} className="text-blue-500" /> Dry Waste
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex flex-col md:flex-row gap-8">
          {tab === "wet"
            ? <WetContent
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                results={results}
                setResults={setResults}
                loading={loading}
                setLoading={setLoading}
                toast={toast}
                handleFileUpload={handleFileUpload}
                handleCameraCapture={handleCameraCapture}
                identifyPlant={identifyPlant}
              />
            : <DryContent />
          }
        </div>
      </main>
    </div>
  );
};

export default Identify;
