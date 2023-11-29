import React from "react";
import {Link} from "react-router-dom";
import {PrimaryButton} from "../../../../components/buttons/PrimaryButton";

export function BlockList() {
  return (
    <div>
      <Link to={"/block-create"}>
        <PrimaryButton id="create_block" text="Create Block" type="button" />
      </Link>
    </div>
  );
}
