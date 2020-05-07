import React, { useEffect, useState } from "react";
import EditFrom from "../../components/EditFrom";
import { getAllByIdUser, editUser } from "../../api/api";

export default function Edit(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      let result = await getAllByIdUser(props.match.params.id);
      setUser(result.data);
    };
    fetchApi();
  }, []);

  const edit = async (user) => {
    let edit = await editUser(props.match.params.id, user)
    if (edit.status === "success") {
      props.history.push('/profile/'+props.match.params.id)
    } else {
      alert(edit.message)
    }
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <hr />
      { user && <EditFrom check="Edit" user={user} edit={edit} />}
    </div>
  );
}
