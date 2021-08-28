import React, { useState } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import { CopyIcon } from "../Svg";

interface Props {
  toCopy: string;
}

const StyleButton = styled(Text).attrs({ role: "button" })`
  position: relative;
  display: flex;
  align-items: center;
`;

const CopyToClipboard: React.FC<Props> = ({ toCopy, children, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  const copyToClipboardWithCommand = (content: string) => {
    const el = document.createElement("textarea");
    el.value = content;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  function displayTooltip() {
    setIsTooltipDisplayed(true);
    setTimeout(() => {
      setIsTooltipDisplayed(false);
    }, 2000);
  }

  return (
    <StyleButton
      small
      bold
      onClick={() => {
        if (navigator.clipboard && navigator.permissions) {
          navigator.clipboard.writeText(toCopy).then(() => displayTooltip());
        } else if (document.queryCommandSupported("copy")) {
          copyToClipboardWithCommand(toCopy);
          displayTooltip();
        }
      }}
      {...props}
    >
      <CopyIcon
        color={isTooltipDisplayed ? "success" : ""}
        width="20px"
        mr="8px" 
      />
      { isTooltipDisplayed ? (
        <Text
          fontSize="14px"
          fontWeight="bold"
          color="success"
        >
          Copied
        </Text>
      ) : children}
    </StyleButton>
  );
};

export default CopyToClipboard;
