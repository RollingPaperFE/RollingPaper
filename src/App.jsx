import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default App;

// /**
//  * App 컴포넌트가 저희 프로젝트의 루트 컴포넌트가 될 것 같습니다.
//  * 여기에서 react-router를 통해 각각의 페이지를 연결지어주는 역할만 해주고
//  * 각각의 페이지 및 컴포넌트는 src 디렉토리 아래에 생성하여 만들어 주시면 될 것 같습니다.
//  * UI파트가 완성되기전까지는 본인이 만든 페이지나 컴포넌트를 App컴포넌트의 div태그를 삭제후 각자가 만든 컴포넌트를 넣어서 확인해주시고
//  * git에 커밋할때는 div태그안의 내용을 원상복구해주시고 커밋해주시면 감사하겠습니다!
//  *
//  * 클론한 뒤 "npm i" 명령어를 터미널에 입력하시면 node_modules가 자동으로 설치됩니다.
//  * 로컬 주소를 얻으려면 "npm run dev" 명령어를 터미널에 입력하시면 됩니다.
//  *
//  * feature/작업이름 형식의 브랜치를 만들어서 작성 후 push해주시면 됩니다!
//  *
//  * 추가적으로 axios와 react-router-dom 패키지는 미리 설치하였으니 참고하시면 좋을것 같습니다!!
//  */
// const App = () => {
//   return <div>여기서 이 글 내용을 삭제하고 컴포넌트 넣어서 확인하세요!</div>;
// };

// export default App;
