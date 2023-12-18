import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {PrimaryButton} from "../../../../components/buttons/PrimaryButton";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import {useAuth} from "../../../../provider/AuthContext";

interface IUser {
  id: string;
  email: string;
  username: string;
}

const initState: IUser = {
  id: "",
  email: "",
  username: "",
};

// TODO: fix this call axios to correct way
const BlockList = () => {
  const {user} = useAuth();
  const [blockList, setBlockList] = useState<IUser>(initState);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getBlockList = async () => {
      try {
        const response = await axiosPrivate(`api/user/${user.email}`);
        isMounted && setBlockList(response.data);
      } catch (error) {
        if (isMounted) {
          console.error("error", error);
        }
      }
    };

    getBlockList();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [user, axiosPrivate]);

  useEffect(() => {
    console.log(blockList);
  }, [blockList]);

  return (
    <div>
      {blockList && (
        <div>
          {blockList.id} <br />
          {blockList.email} <br />
          {blockList.username} <br />
        </div>
      )}
      <Link to={"/block-create"}>
        <PrimaryButton id="create_block" text="Create Block" type="button" />
      </Link>
    </div>
  );
};
export default BlockList;
