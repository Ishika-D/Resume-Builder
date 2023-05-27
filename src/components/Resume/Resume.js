import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  Calendar,
  GitHub,
  Linkedin,
  Mail,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

import styles from "./Resume.module.css";

const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    skills: information[sections.skills],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    objective: information[sections.objective],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => seTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${styles.section} ${info.workExp?.sectionTitle ? "" : styles.hidden
          }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div>
              <div className={styles.item} key={item.title}>
                {item.title ? (
                  <div className={styles.title}>{item.title}</div>
                ) : (<span/>)}
                {item.location ? (
                  <div className={styles.location}>
                    <MapPin /> {item.location}
                  </div>
                ) : (<span/>)}
              </div>
              {item.companyName ? (
                <p className={styles.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {item.startDate ? getFormattedDate(item.startDate) : "Present"}
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${styles.section} ${info.project?.sectionTitle ? "" : styles.hidden
          }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
        <div>
              <div className={styles.item}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${styles.section} ${info.education?.sectionTitle ? "" : styles.hidden
          }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
              <div>
                {item.title ? (
                  <p className={styles.title}>{item.title}</p>
                ) : (
                  <span />
                )}
                {item.college ? (
                  <p className={styles.subTitle}>{item.college}</p>
                ) : (
                  <span />
                )}
              </div>
              {item.percent ? (
                <div className={styles.date}>
                  {(item.percent)}%
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.skills]: (
      <div
        key={"skills"}
        draggable
        onDragOver={() => seTarget(info.skills?.id)}
        onDragEnd={() => setSource(info.skills?.id)}
        className={`${styles.section} ${info.skills?.sectionTitle ? "" : styles.hidden
          }`}
      >
        <div className={styles.sectionTitle}>
          {info.skills?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.skills?.points?.length > 0 ? (
            <ul className={` ${styles.numbered} ${styles.skills}`}>
              {info.skills?.points?.map((elem, index) => (
                elem !== "" ?
                  <li className={styles.point} key={elem + index}>
                    {elem !== "" ? elem : ""}
                  </li> : ""
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${info.achievement?.sectionTitle ? "" : styles.hidden
          }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.objective]: (
      <div
        key={"objective"}
        draggable
        onDragOver={() => seTarget(info.objective?.id)}
        onDragEnd={() => setSource(info.objective?.id)}
        className={`${styles.section} ${info.objective?.sectionTitle ? "" : styles.hidden
          }`}
      >
        <div className={styles.sectionTitle}>{info.objective?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.objective?.detail}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      info?.other?.detail ?
        <div
          key={"other"}
          draggable
          onDragOver={() => seTarget(info.other?.id)}
          onDragEnd={() => setSource(info.other?.id)}
          className={`${styles.section} ${info.other?.sectionTitle ? "" : styles.hidden
            }`}
        >
          <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
          <div className={styles.content}>
            <p className={styles.overview}>{info?.other?.detail}</p>
          </div>
        </div>
        : ""
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [sections.objective, sections.skills, sections.workExp, sections.project, sections.education, sections.achievement, sections.other],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  return (
    <div ref={ref}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.header}>
          <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
          <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>

          <div className={styles.links}>
            {info.basicInfo?.detail?.email ? (
              <a className={styles.link} type="email">
                <Mail /> {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.phone ? (
              <a className={styles.link}>
                <Phone /> {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedin ? (
              <a className={styles.link}>
                <Linkedin /> {info.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.github ? (
              <a className={styles.link}>
                <GitHub /> {info.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.col1}>
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          {/* <div className={styles.col2}>
            {columns[1].map((item) => sectionDiv[item])}
          </div> */}
        </div>
      </div>
    </div>
  );
});

export default Resume;
