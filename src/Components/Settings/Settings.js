import { Card, Switch } from "antd";
import React, { useState } from "react";
import Classes from "./setting.module.css";

function Settings() {
  const [loading, setLoading] = useState(true);

  return (
    <Card className={`${Classes.cont} mt-2 `}>
      <div className="row mb-3 ">
        <div className="col-lg-3 col-md-12 mb-3 mb-md-3 ">
          <Card id={Classes.notifys}>
            <p className={Classes.setting}>Settings</p>
            <p className={Classes.general}>General Settings</p>
            <button
              type="button"
              className="btn w-100 text-start pe-5"
              style={{
                backgroundColor: "#C42072",
                color: "#ffffff",
                right: "10px",
                position: "relative",
              }}
            >
              Notifications
            </button>
            <p className="mt-3 privacy">Privacy</p>
          </Card>
        </div>

        <div className="col-lg-9 col-md-12">
          <Card>
            <p className={Classes.setting}>Notifications</p>

            <div className="row align-items-center">
              <div className="col">
                <p className={Classes.setting}>Email notifications</p>
                <p>Enable or disable email notifications.</p>
              </div>
              <div className="col-auto">
                <Switch
                  checked={!loading}
                  onChange={(checked) => setLoading(!checked)}
                  style={{ backgroundColor: "blue" }}
                />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col">
                <p className={Classes.setting}>SMS notifications</p>
                <p>Enable or disable SMS notifications.</p>
              </div>
              <div className="col-auto">
                <Switch
                  checked={loading}
                  onChange={(checked) => setLoading(!checked)}
                  style={{ backgroundColor: "gainsboro" }}
                />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col">
                <p className={Classes.setting}>Push Notifications</p>
                <p>Enable or disable push notifications.</p>
              </div>
              <div className="col-auto">
                <Switch
                  checked={loading}
                  onChange={(checked) => setLoading(!checked)}
                  style={{ backgroundColor: "gainsboro" }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col text-end">
                <button className={Classes.save}>Save</button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}

export default Settings;
