
import React, { useState } from "react";
import { Upload, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const wetExamples = [
  { name: "Banana Peel", img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300&q=80" },
  { name: "Vegetable Scraps", img: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=300&q=80" },
  { name: "Tea Bags", img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=300&q=80" }
];

const IdentifyWet = () => {
  const { toast } = useToast();
  const [image, setImage] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      toast({
        title: "Image uploaded",
        description: "Your wet waste image has been uploaded.",
        duration: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-8">
      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2 mb-4">
          <Droplet size={28} className="text-green-500" /> Wet Waste Identifier
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {wetExamples.map((w) => (
            <div key={w.name} className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <img src={w.img} alt={w.name} className="w-24 h-24 object-cover mb-2 rounded-full" />
              <span className="font-medium">{w.name}</span>
            </div>
          ))}
        </div>
        <label htmlFor="wet-upload" className="block cursor-pointer mt-8">
          <div className="border-2 border-dashed border-green-300 py-8 px-3 rounded-md text-center hover:bg-green-50 transition">
            <Upload size={36} className="mx-auto mb-3 text-green-500" />
            <p className="text-gray-600">Upload a wet waste image to identify</p>
          </div>
          <input id="wet-upload" type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
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
export default IdentifyWet;
