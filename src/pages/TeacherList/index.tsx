import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Available proffys">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Lesson</label>
            <input type="text" id="subject" />
          </div>
          {/* 2 */}
          <div className="input-block">
            <label htmlFor="subject">Day of the week</label>
            <input type="text" id="week_day" />
          </div>
          {/* 3 */}
          <div className="input-block">
            <label htmlFor="subject">Hours</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
