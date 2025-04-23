
import React, { useState } from "react";
import { Upload, CloudRain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const dryExamples = [
  { name: "Dry Leaf", img: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=300&q=80" },
  { name: "Paper", img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=300&q=80" },
  { name: "Twig", img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300&q=80" }
];

const IdentifyDry = () => {
  const { toast } = useToast();
  const [image, setImage] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      toast({
        title: "Image uploaded",
        description: "Your dry waste image has been uploaded.",
        duration: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-8">
      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-2 mb-4">
          <CloudRain size={28} className="text-blue-500" /> Dry Waste Identifier
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {dryExamples.map((d) => (
            <div key={d.name} className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <img src={d.img} alt={d.name} className="w-24 h-24 object-cover mb-2 rounded-full" />
              <span className="font-medium">{d.name}</span>
            </div>
          ))}
        </div>
        <label htmlFor="dry-upload" className="block cursor-pointer mt-8">
          <div className="border-2 border-dashed border-blue-300 py-8 px-3 rounded-md text-center hover:bg-blue-50 transition">
            <Upload size={36} className="mx-auto mb-3 text-blue-500" />
            <p className="text-gray-600">Upload a dry waste image to identify</p>
          </div>
          <input id="dry-upload" type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
        </label>
        {image && (
          <div className="mt-5 flex flex-col items-center">
            <img src={image} alt="Uploaded" className="w-56 h-56 rounded-lg object-cover shadow" />
          </div>
        )}
      </div>
    </div>
  );
};
export default IdentifyDry;
