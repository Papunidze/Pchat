exports.EmailForm = (name, avatar, link) => {
  return `
  <div
    style="
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  "
  >
    <div style="max-width: 650px">
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        height="100%"
        width="100%"
        style="border-spacing: 0; border-collapse: collapse; margin: 0 auto"
        bgcolor="#fff"
      >
        <tbody>
          <tr>
            <td valign="top">
              <center style="width: 100%">
                <div style="max-width: 600px; margin: auto">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    align="center"
                    width="100%"
                    style="
                    border-spacing: 0;
                    border-collapse: collapse;
                    max-width: 600px;
                    margin: 0 auto;
                  "
                  >
                    <tbody>
                      <tr>
                        <td
                          style="
                          color: #9e9ea7;
                          font-family: -apple-system, BlinkMacSystemFont,
                            'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                            'Apple Color Emoji', 'Segoe UI Emoji',
                            'Segoe UI Symbol';
                          font-size: 13px;
                          line-height: 1.6;
                          padding: 30px 0 20px 30px;
                        "
                          align="left"
                        >
                          <div
                            style="
                            color: #ff6452;
                            text-decoration: none;
                            transform: translateY(2rem);
                            font-weight: 500;
                          "
                            target="_blank"
                          >
                            <h1 style="font-style: italic">Pchat</h1>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    align="center"
                    width="100%"
                    style="
                    border-spacing: 0;
                    border-collapse: collapse;
                    max-width: 600px;
                    margin: 0 auto;
                  "
                    bgcolor="#ffffff"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            border="0"
                            cellpadding="30"
                            cellspacing="0"
                            width="100%"
                            style="
                            border-spacing: 0;
                            border-collapse: collapse;
                            margin: 0 auto;
                          "
                          >
                            <tbody>
                              <tr>
                                <td
                                  valign="top"
                                  style="
                                  color: #0d0c22;
                                  font-family: -apple-system, BlinkMacSystemFont,
                                    'Segoe UI', Roboto, Helvetica, Arial,
                                    sans-serif, 'Apple Color Emoji',
                                    'Segoe UI Emoji', 'Segoe UI Symbol';
                                  font-size: 14px;
                                  line-height: 150%;
                                "
                                >
                                  <div
                                    id="m_7867679290488475029greeting"
                                    style="
                                    margin-bottom: 20px;
                                    padding-bottom: 25px;
                                    border-bottom-width: 1px;
                                    border-bottom-color: #eee;
                                    border-bottom-style: solid;
                                  "
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      style="
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      margin: 0 auto;
                                    "
                                    >
                                      <tbody>
                                        <tr>
                                          <td>
                                            <h1
                                              style="
                                              display: block;
                                              color: #0d0c22;
                                              font-family: -apple-system,
                                                BlinkMacSystemFont, 'Segoe UI',
                                                Roboto, Helvetica, Arial,
                                                sans-serif, 'Apple Color Emoji',
                                                'Segoe UI Emoji',
                                                'Segoe UI Symbol';
                                              font-size: 18px;
                                              font-weight: 500;
                                              line-height: 1.3;
                                              margin: 0;
                                            "
                                            >
                                              Hi ${name},
                                              <span
                                                style="
                                                display: block;
                                                color: #9e9ea7;
                                                font-size: 15px;
                                                font-weight: normal;
                                              "
                                              >
                                                Here are your password reset
                                                instructions.
                                              </span>
                                            </h1>
                                          </td>
                                          <td width="58" align="right">
                                            <div
                                              rel="contact"
                                              title="Papu"
                                              style="
                                              color: #4f3cc9;
                                              font-family: -apple-system,
                                                BlinkMacSystemFont, 'Segoe UI',
                                                Roboto, Helvetica, Arial,
                                                sans-serif, 'Apple Color Emoji',
                                                'Segoe UI Emoji',
                                                'Segoe UI Symbol';
                                              font-weight: 500;
                                              text-decoration: none;
                                            "
                                              target="_blank"
                                            >
                                              <img
                                                alt="Papu"
                                                width="48"
                                                height="48"
                                                src="${avatar}" 
                                                style="
                                                height: auto;
                                                outline: none;
                                                line-height: 100%;
                                                text-decoration: none;
                                                display: inline;
                                                width: 48px;
                                                border-radius: 50%;
                                                border-width: 0;
                                              "
                                                class="CToWUd"
                                                data-bit="iit"
                                              />
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>

                                  <p
                                    style="
                                    margin-top: 15px;
                                    margin-bottom: 15px;
                                    color: #555;
                                    font-size: 16px;
                                    line-height: 1.5;
                                  "
                                  >
                                    A request to reset your Pchat password has
                                    been made. If you did not make this request,
                                    simply ignore this email. If you did make
                                    this request, please reset your password:
                                  </p>

                                  <table
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    align="center"
                                    style="
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    margin: auto;
                                  "
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="border-radius: 4px"
                                          align="center"
                                          bgcolor="transparent"
                                        >
                                          <a
                                            href=${link}
                                            style="
                                            color: #4f3cc9;
                                            font-family: -apple-system,
                                              BlinkMacSystemFont, 'Segoe UI',
                                              Roboto, Helvetica, Arial,
                                              sans-serif, 'Apple Color Emoji',
                                              'Segoe UI Emoji',
                                              'Segoe UI Symbol';
                                            font-weight: 500;
                                            text-decoration: none;
                                            display: block;
                                            box-sizing: border-box;
                                            height: 48px;
                                            overflow: hidden;
                                            border-radius: 9999999px;
                                            background-color: #ff6452;
                                            font-size: 14px;
                                            line-height: 1;
                                            text-align: center;
                                            white-space: nowrap;
                                            padding: 16px 24px;
                                            border: 1px solid #ff6452;
                                          "
                                            target="_blank"
                                          >
                                            <span style="color: #ffffff">
                                              Reset Password
                                            </span>
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <p
                                    style="
                                    margin-top: 15px;
                                    margin-bottom: 15px;
                                    color: #555;
                                    font-size: 16px;
                                    line-height: 1.5;
                                  "
                                  >
                                    Thank you,
                                    <br />
                                    Team Pchat
                                  </p>

                                  <p
                                    style="
                                    margin-top: 30px;
                                    margin-bottom: 15px;
                                    color: #aaa;
                                    font-size: 13px;
                                    line-height: 1.5;
                                  "
                                  >
                                    If the button above does not work, try
                                    copying and pasting the URL into your
                                    browser.
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    align="center"
                    width="100%"
                    style="
                    border-spacing: 0;
                    border-collapse: collapse;
                    max-width: 600px;
                    margin: 0 auto;
                  "
                  ></table>
                </div>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`;
};
