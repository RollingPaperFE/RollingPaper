import { useParams } from "react-router-dom";

const MsgPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default MsgPage;
