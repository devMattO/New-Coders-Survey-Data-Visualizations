'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, DataTypes) {
    return queryInterface.createTable('surveydata', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
      },
      Age : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      AttendedBootcamp : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      BootcampFinish : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      BootcampFullJobAfter : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      BootcampLoanYesNo : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      BootcampMonthsAgo : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      BootcampName : {
        type : Sequelize.STRING(127),
        allowNull : true
      },
      BootcampPostSalary : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      BootcampRecommend : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ChildrenNumber : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      CityPopulation : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      CodeEventBootcamp : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventCoffee : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventConferences : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventDjangoGirls : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventGameJam : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventGirlDev : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventHackathons : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventMeetup : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventNodeSchool : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventNone : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventOther : {
        type : Sequelize.STRING(127),
        allowNull : true
      },
      CodeEventRailsBridge : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventRailsGirls : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventStartUpWknd : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventWomenCode : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CodeEventWorkshop : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      CommuteTime : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      CountryCitizen : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      CountryLive : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      EmploymentField : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      EmploymentFieldOther : {
        type : Sequelize.STRING(127),
        allowNull : true
      },
      EmploymentStatus : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      EmploymentStatusOther : {
        type : Sequelize.STRING(127),
        allowNull : true
      },
      ExpectedEarning : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      FinanciallySupporting : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      Gender : {
        type : Sequelize.STRING(31),
        allowNull : true
      },
      HasChildren : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      HasDebt : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      HasFinancialDependents : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      HasHighSpdInternet : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      HasHomeMortgage : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      HasServedInMilitary : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      HasStudentDebt : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      HomeMortgageOwe : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      HoursLearning : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      IDx : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      IDy : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      Income : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      IsEthnicMinority : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      IsReceiveDiabilitiesBenefits : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      IsSoftwareDev : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      IsUnderEmployed : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      JobApplyWhen : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      JobPref : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      JobRelocateYesNo : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      JobRoleInterest : {
        type : Sequelize.STRING(127),
        allowNull : true
      },
      JobRoleInterestOther : {
        type : Sequelize.STRING(127),
        allowNull : true
      },
      JobWherePref : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      LanguageAtHome : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      MaritalStatus : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      MoneyForLearning : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      MonthsProgramming : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      NetworkID : {
        type : Sequelize.STRING(31),
        allowNull : true
      },
      Part1EndTime : {
        type : Sequelize.STRING(31),
        allowNull : true
      },
      Part1StartTime : {
        type : Sequelize.STRING(31),
        allowNull : true
      },
      Part2EndTime : {
        type : Sequelize.STRING(31),
        allowNull : true
      },
      Part2StartTime : {
        type : Sequelize.STRING(31),
        allowNull : true
      },
      PodcastChangeLog : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastCodeNewbie : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastCodingBlocks : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastDeveloperTea : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastDotNetRocks : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastHanselminutes : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastJSJabber : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastJsAir : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastNone : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastOther : {
        type : Sequelize.STRING(511),
        allowNull : true
      },
      PodcastProgrammingThrowDown : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastRubyRogues : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastSEDaily : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastShopTalk : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastTalkPython : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      PodcastWebAhead : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceBlogs : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceBooks : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceCodeWars : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceCodecademy : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceCoursera : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceDevTips : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceEdX : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceEggHead : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceFCC : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceGoogle : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceHackerRank : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceKhanAcademy : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceLynda : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceMDN : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceOdinProj : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceOther : {
        type : Sequelize.STRING(511),
        allowNull : true
      },
      ResourcePluralSight : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceReddit : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceSkillCrush : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceSoloLearn : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceStackOverflow : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceTreehouse : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceUdacity : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceUdemy : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceW3Schools : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      ResourceYouTube : {
        type : Sequelize.BOOLEAN,
        allowNull : true
      },
      SchoolDegree : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      SchoolMajor : {
        type : Sequelize.STRING(63),
        allowNull : true
      },
      StudentDebtOwe : {
        type : Sequelize.INTEGER,
        allowNull : true
      }
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('surveydata');
  }
};
