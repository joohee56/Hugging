import { Unity, useUnityContext } from "react-unity-webgl";
import { Link } from "react-router-dom";

const CounselCommunity = () => {
  const { sendMessage, UNSAFE__unityInstance, unityProvider, unload } =
    useUnityContext({
      loaderUrl: "Build/WebGLBuild.loader.js",
      dataUrl: "Build/WebGLBuild.data",
      frameworkUrl: "Build/WebGLBuild.framework.js",
      codeUrl: "Build/WebGLBuild.wasm",
    });

  function send() {
    window.unityInstance = UNSAFE__unityInstance;
    sendMessage("HuggingLauncher", "SetCounselInfos", "Community|주희");
  }

  return (
    <div>
      {send()}
      <Unity
        style={{
          width: "90%",
          height: "100%",
          justifySelf: "center",
          alignContent: "center",
        }}
        unityProvider={unityProvider}
      />
      <button onClick={unload}>
        <Link to="/counselselect" style={{ textDecoration: "none" }}>
          나가기
        </Link>
      </button>
    </div>
  );
};

export default CounselCommunity;
