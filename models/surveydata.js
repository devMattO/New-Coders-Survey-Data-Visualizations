module.exports = function(sequelize, DataTypes) {
  var surveydata = sequelize.define("surveydata", {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    Age : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    AttendedBootcamp : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    BootcampFinish : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    BootcampFullJobAfter : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    BootcampLoanYesNo : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    BootcampMonthsAgo : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    BootcampName : {
      type : DataTypes.STRING(127),
      allowNull : true
    },
    BootcampPostSalary : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    BootcampRecommend : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ChildrenNumber : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    CityPopulation : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    CodeEventBootcamp : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventCoffee : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventConferences : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventDjangoGirls : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventGameJam : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventGirlDev : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventHackathons : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventMeetup : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventNodeSchool : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventNone : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventOther : {
      type : DataTypes.STRING(127),
      allowNull : true
    },
    CodeEventRailsBridge : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventRailsGirls : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventStartUpWknd : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventWomenCode : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CodeEventWorkshop : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    CommuteTime : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    CountryCitizen : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    CountryLive : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    EmploymentField : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    EmploymentFieldOther : {
      type : DataTypes.STRING(127),
      allowNull : true
    },
    EmploymentStatus : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    EmploymentStatusOther : {
      type : DataTypes.STRING(127),
      allowNull : true
    },
    ExpectedEarning : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    FinanciallySupporting : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    Gender : {
      type : DataTypes.STRING(31),
      allowNull : true
    },
    HasChildren : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    HasDebt : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    HasFinancialDependents : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    HasHighSpdInternet : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    HasHomeMortgage : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    HasServedInMilitary : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    HasStudentDebt : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    HomeMortgageOwe : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    HoursLearning : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    IDx : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    IDy : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    Income : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    IsEthnicMinority : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    IsReceiveDiabilitiesBenefits : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    IsSoftwareDev : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    IsUnderEmployed : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    JobApplyWhen : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    JobPref : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    JobRelocateYesNo : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    JobRoleInterest : {
      type : DataTypes.STRING(127),
      allowNull : true
    },
    JobRoleInterestOther : {
      type : DataTypes.STRING(127),
      allowNull : true
    },
    JobWherePref : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    LanguageAtHome : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    MaritalStatus : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    MoneyForLearning : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    MonthsProgramming : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    NetworkID : {
      type : DataTypes.STRING(31),
      allowNull : true
    },
    Part1EndTime : {
      type : DataTypes.STRING(31),
      allowNull : true
    },
    Part1StartTime : {
      type : DataTypes.STRING(31),
      allowNull : true
    },
    Part2EndTime : {
      type : DataTypes.STRING(31),
      allowNull : true
    },
    Part2StartTime : {
      type : DataTypes.STRING(31),
      allowNull : true
    },
    PodcastChangeLog : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastCodeNewbie : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastCodingBlocks : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastDeveloperTea : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastDotNetRocks : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastHanselminutes : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastJSJabber : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastJsAir : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastNone : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastOther : {
      type : DataTypes.STRING(511),
      allowNull : true
    },
    PodcastProgrammingThrowDown : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastRubyRogues : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastSEDaily : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastShopTalk : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastTalkPython : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    PodcastWebAhead : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceBlogs : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceBooks : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceCodeWars : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceCodecademy : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceCoursera : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceDevTips : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceEdX : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceEggHead : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceFCC : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceGoogle : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceHackerRank : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceKhanAcademy : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceLynda : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceMDN : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceOdinProj : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceOther : {
      type : DataTypes.STRING(511),
      allowNull : true
    },
    ResourcePluralSight : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceReddit : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceSkillCrush : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceSoloLearn : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceStackOverflow : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceTreehouse : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceUdacity : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceUdemy : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceW3Schools : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    ResourceYouTube : {
      type : DataTypes.BOOLEAN,
      allowNull : true
    },
    SchoolDegree : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    SchoolMajor : {
      type : DataTypes.STRING(63),
      allowNull : true
    },
    StudentDebtOwe : {
      type : DataTypes.INTEGER,
      allowNull : true
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  return surveydata;
};
