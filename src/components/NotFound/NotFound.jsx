import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section id="not-found" onClick={() => navigate("/")}>
      <img
        src="https://lh3.googleusercontent.com/jxCxJhPsSN7VV2jDTsNvT0-EfZS1chexBUmTV-5BsTlM7GfmLkt3GMTa0Dnw14ehSrAE0ERE6fAXE_n0T4l3p_xqm5VPVxKM6cx-W1EP9FgqGDmSHwSTHMcnH8xLutVKf4mH3R7h"
        alt="not found page"
      />
    </section>
  );
};

export default NotFound;
