
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PageNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-2">
      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Previous
      </Button>
      <Button
        variant="outline"
        onClick={() => navigate(1)}
        className="flex items-center gap-2"
      >
        Next
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PageNavigation;
