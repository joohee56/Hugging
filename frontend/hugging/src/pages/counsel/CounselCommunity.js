import classes from "./CounselCommunity.module.css";
import { Unity, useUnityContext } from "react-unity-webgl";
import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const CounselCommunity = () => {
  const {
    sendMessage,
    UNSAFE__unityInstance,
    unityProvider,
    addEventListener,
    removeEventListener,
    isLoaded,
    requestFullscreen,
    loadingProgression,
    // unload
  } = useUnityContext({
    loaderUrl: "Build/WebGLBuild.loader.js",
    dataUrl: "Build/WebGLBuild.data",
    frameworkUrl: "Build/WebGLBuild.framework.js",
    codeUrl: "Build/WebGLBuild.wasm",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);
  const navigate = useNavigate();
  const exit = useCallback(() => {
    navigate("/counseldone");
  }, []);

  function setLandscape() {
    window.screen.orientation.lock("landscape");
  }

  function sendToUnity() {
    // AgoraRTC.createStream({ video: false, audio: true });
    // AgoraRTC.getDevices();
    window.unityInstance = UNSAFE__unityInstance;
    sendMessage("HuggingLauncher", "SetCounselInfos", "Community|주희");
  }

  useEffect(() => {
    addEventListener("Exit", exit);
    return () => {
      removeEventListener("Exit", exit);
    };
  }, [addEventListener, removeEventListener, exit]);

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  return (
    <div>
      {setLandscape()}
      <Unity
        style={{
          width: "90%",
          height: "100%",
          justifySelf: "center",
          alignContent: "center",
        }}
        unityProvider={unityProvider}
        devicePixelRatio={window.devicePixelRatio}
      />
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className={classes.loadingOverlay}>
          <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
          <p>
            <b>로딩중입니다!</b>
            <br></br> 조금만 기다려주세요 ☺️<br></br> ({loadingPercentage}%)
          </p>
        </div>
      )}
      {isLoaded === true && requestFullscreen(true)}
      {isLoaded === true && sendToUnity()}
      {isLoaded === true && (
        <button onClick={handleClickEnterFullscreen}>전체화면</button>
      )}
    </div>
  );
};

export default CounselCommunity;
