import React, { Suspense, useEffect, useState } from "react";

import { MainLoading } from "../widgets/loading/mainLoading";

const HomeStart = React.lazy(()=> import("../widgets/HomeStart"));

export const Home = (): React.JSX.Element => {
 
    return (
      <React.Fragment>
          <Suspense fallback={<MainLoading />}>
            <HomeStart />
          </Suspense>
      </React.Fragment>
    );
  };