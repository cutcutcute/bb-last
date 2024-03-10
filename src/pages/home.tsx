import React, { Suspense, useEffect, useLayoutEffect, useState } from "react";

import { MainLoading } from "../widgets/loading/mainLoading";

const HomeStart = React.lazy(()=> import("../widgets/HomeStart"));

export const Home = (): React.JSX.Element => {
    

    return (

          <Suspense fallback={<MainLoading />}>
            <HomeStart />
          </Suspense>

    );
  };