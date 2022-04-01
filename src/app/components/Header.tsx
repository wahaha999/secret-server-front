import React, { useState, useCallback } from "react";
import * as Style from "./styles";
import { ActionModal } from "./ActionModal";

const Header = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleHide = useCallback(() => {
    setIsShow(false);
  }, []);

  return (
    <>
      <Style.DesktopHeader>
        <Style.LogoWidget insideColor={"white"} outsideColor={"white"}>
          Secret
        </Style.LogoWidget>
        <Style.CreateWidget>
          <Style.Button onClick={() => setIsShow(true)}>
            Create secret
          </Style.Button>
        </Style.CreateWidget>
      </Style.DesktopHeader>
      <ActionModal isShow={isShow} onHide={handleHide} />
    </>
  );
};

export default Header;
