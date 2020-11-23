import { NavLink, Typography } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React from "react";
import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import { ReactComponent as GlobalSvg } from "../media/Icons/global.svg";
import { ReactComponent as GiftSvg } from "../media/Icons/gift.svg";
import { ROUTE_LINKS } from "../Components/Routes";
interface IAppWrapper {
  children: ReactNode | ReactNode[];
}

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {},
    cta: {
      display: "block",
      maxWidth: 200,
      maxHeight: 200,
      position: "fixed",
      bottom: constants.generalUnit * 3,
      right: constants.generalUnit * 3,
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxWidth: 460,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      borderRadius: 4,
    },
    pageArea: {
      height: "100%",
      width: "100%",
      overflow: "hidden",
      border: `1px solid ${palette.additional["gray"][7]}`,
      borderRadius: 4,
    },
    navTabs: {
      // position: "absolute",
      // top: 0,
      // left: 0,
      width: "100%",
      // transform: "translate(0,-100%)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: `0 ${constants.generalUnit}px`,
      transform: "translateY(1px)",
      "& > a": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: `${constants.generalUnit}px ${constants.generalUnit * 1.5}px`,
        border: `1px solid ${palette.additional["gray"][7]}`,
        textDecoration: "none",
        marginRight: constants.generalUnit,
        transitionDuration: `${animation.transform}ms`,
        color: palette.additional["gray"][8],
        maxHeight: constants.navItemHeight,
        "& svg": {
          transitionDuration: `${animation.transform}ms`,
          fill: palette.additional["gray"][8],
        },
        "&.active": {
          color: palette.additional["gray"][9],
          textDecoration: "underline",
          "& svg": {
            fill: palette.additional["geekblue"][5],
          },
        },
        "& > *:first-child": {
          marginRight: constants.generalUnit,
        },
      },
      "& svg": {
        height: 14,
        width: 14,
      },
    },
  });
});

const AppWrapper: React.FC<IAppWrapper> = ({ children }: IAppWrapper) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <AppHeader />
      <section className={classes.content}>
        <section className={classes.navTabs}>
          <NavLink activeClassName="active" to={ROUTE_LINKS.Transfer}>
            <GlobalSvg />
            <Typography variant="h5">Transfer</Typography>
          </NavLink>
          <NavLink activeClassName="active" to={ROUTE_LINKS.Wrap}>
            <GiftSvg />
            <Typography variant="h5">Wrap token</Typography>
          </NavLink>
        </section>
        <div className={classes.pageArea}>{children}</div>
      </section>

      {/* Put CTA here */}
      <a className={classes.cta} target="_blank" href="https://etclabs.org/">
        <svg
          width="152"
          height="55"
          viewBox="0 0 152 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.2266 10.0469H28.2969V0.726562H25.9375V12H33.2266V10.0469ZM38.0625 5.13281C39.0781 5.13281 39.7734 5.86719 39.8203 6.9375H36.2656C36.3438 5.89062 37.0625 5.13281 38.0625 5.13281ZM39.8516 9.4375C39.6406 10.0781 39 10.4922 38.1641 10.4922C37 10.4922 36.2422 9.67188 36.2422 8.47656V8.33594H42.0156V7.64062C42.0156 5.09375 40.4766 3.44531 38.0391 3.44531C35.5625 3.44531 34 5.17969 34 7.85156C34 10.5312 35.5469 12.1797 38.125 12.1797C40.1953 12.1797 41.6953 11.0781 41.9453 9.4375H39.8516ZM46.4297 10.4844C45.6562 10.4844 45.1406 10.0938 45.1406 9.46875C45.1406 8.875 45.625 8.49219 46.4766 8.42969L48.2422 8.32031V8.92969C48.2422 9.83594 47.4219 10.4844 46.4297 10.4844ZM45.6797 12.1328C46.7266 12.1328 47.7656 11.6094 48.2344 10.7188H48.2812V12H50.4844V6.24219C50.4844 4.55469 49.0859 3.44531 46.9375 3.44531C44.7188 3.44531 43.3359 4.5625 43.25 6.1875H45.3359C45.4453 5.57031 45.9844 5.14844 46.8359 5.14844C47.6953 5.14844 48.2422 5.60156 48.2422 6.38281V6.9375L46.1328 7.0625C44.0469 7.1875 42.875 8.07031 42.875 9.59375C42.875 11.1016 44.0859 12.1328 45.6797 12.1328ZM51.9609 12H54.2422V7.32031C54.2422 6.14062 54.8984 5.45312 56.0234 5.45312C56.3516 5.45312 56.6641 5.50781 56.8516 5.58594V3.57812C56.6953 3.53125 56.4688 3.49219 56.2031 3.49219C55.2188 3.49219 54.5078 4.07031 54.2109 5.13281H54.1641V3.625H51.9609V12ZM57.7891 12H60.0703V7.19531C60.0703 6.10938 60.7188 5.35938 61.7422 5.35938C62.7656 5.35938 63.2812 5.98438 63.2812 7.07812V12H65.5625V6.60156C65.5625 4.64062 64.5156 3.46875 62.6562 3.46875C61.3672 3.46875 60.4844 4.07812 60.0391 5.11719H59.9922V3.625H57.7891V12ZM70.1797 12H72.4609V6.94531C72.4609 6.00781 73.0469 5.35156 73.9141 5.35156C74.7578 5.35156 75.2656 5.88281 75.2656 6.78125V12H77.4609V6.91406C77.4609 5.98438 78.0312 5.35156 78.8984 5.35156C79.7812 5.35156 80.2656 5.88281 80.2656 6.85156V12H82.5469V6.28125C82.5469 4.59375 81.4453 3.46875 79.8047 3.46875C78.5781 3.46875 77.5781 4.13281 77.2031 5.1875H77.1562C76.875 4.09375 76.0312 3.46875 74.8203 3.46875C73.6797 3.46875 72.7812 4.13281 72.4297 5.14062H72.3828V3.625H70.1797V12ZM87.8359 12.1797C90.3672 12.1797 91.9844 10.5625 91.9844 7.80469C91.9844 5.08594 90.3438 3.44531 87.8359 3.44531C85.3281 3.44531 83.6875 5.09375 83.6875 7.80469C83.6875 10.5547 85.3047 12.1797 87.8359 12.1797ZM87.8359 10.4375C86.7109 10.4375 86 9.49219 86 7.8125C86 6.14844 86.7266 5.1875 87.8359 5.1875C88.9453 5.1875 89.6641 6.14844 89.6641 7.8125C89.6641 9.49219 88.9531 10.4375 87.8359 10.4375ZM93.1641 12H95.4453V7.32031C95.4453 6.14062 96.1016 5.45312 97.2266 5.45312C97.5547 5.45312 97.8672 5.50781 98.0547 5.58594V3.57812C97.8984 3.53125 97.6719 3.49219 97.4062 3.49219C96.4219 3.49219 95.7109 4.07031 95.4141 5.13281H95.3672V3.625H93.1641V12ZM102.469 5.13281C103.484 5.13281 104.18 5.86719 104.227 6.9375H100.672C100.75 5.89062 101.469 5.13281 102.469 5.13281ZM104.258 9.4375C104.047 10.0781 103.406 10.4922 102.57 10.4922C101.406 10.4922 100.648 9.67188 100.648 8.47656V8.33594H106.422V7.64062C106.422 5.09375 104.883 3.44531 102.445 3.44531C99.9688 3.44531 98.4062 5.17969 98.4062 7.85156C98.4062 10.5312 99.9531 12.1797 102.531 12.1797C104.602 12.1797 106.102 11.0781 106.352 9.4375H104.258ZM114.008 10.4844C113.234 10.4844 112.719 10.0938 112.719 9.46875C112.719 8.875 113.203 8.49219 114.055 8.42969L115.82 8.32031V8.92969C115.82 9.83594 115 10.4844 114.008 10.4844ZM113.258 12.1328C114.305 12.1328 115.344 11.6094 115.812 10.7188H115.859V12H118.062V6.24219C118.062 4.55469 116.664 3.44531 114.516 3.44531C112.297 3.44531 110.914 4.5625 110.828 6.1875H112.914C113.023 5.57031 113.562 5.14844 114.414 5.14844C115.273 5.14844 115.82 5.60156 115.82 6.38281V6.9375L113.711 7.0625C111.625 7.1875 110.453 8.07031 110.453 9.59375C110.453 11.1016 111.664 12.1328 113.258 12.1328ZM124.516 12.1328C126.625 12.1328 127.914 10.5078 127.914 7.8125C127.914 5.10938 126.617 3.49219 124.508 3.49219C123.312 3.49219 122.383 4.08594 121.922 5.07812H121.875V0.726562H119.594V12H121.844V10.5625H121.891C122.352 11.5391 123.289 12.1328 124.516 12.1328ZM123.727 5.32031C124.859 5.32031 125.578 6.28906 125.578 7.8125C125.578 9.34375 124.867 10.2969 123.727 10.2969C122.617 10.2969 121.867 9.32812 121.867 7.8125C121.867 6.3125 122.625 5.32031 123.727 5.32031ZM132.945 12.1797C135.477 12.1797 137.094 10.5625 137.094 7.80469C137.094 5.08594 135.453 3.44531 132.945 3.44531C130.438 3.44531 128.797 5.09375 128.797 7.80469C128.797 10.5547 130.414 12.1797 132.945 12.1797ZM132.945 10.4375C131.82 10.4375 131.109 9.49219 131.109 7.8125C131.109 6.14844 131.836 5.1875 132.945 5.1875C134.055 5.1875 134.773 6.14844 134.773 7.8125C134.773 9.49219 134.062 10.4375 132.945 10.4375ZM146.008 3.625H143.727V8.42188C143.727 9.53125 143.094 10.2578 142.078 10.2578C141.07 10.2578 140.516 9.66406 140.516 8.54688V3.625H138.234V9.02344C138.234 10.9766 139.438 12.1562 141.25 12.1562C142.516 12.1562 143.344 11.5469 143.758 10.4922H143.805V12H146.008V3.625ZM148.102 1.69531V3.625H146.922V5.34375H148.102V9.74219C148.102 11.375 148.867 12.0312 150.836 12.0312C151.297 12.0312 151.688 11.9922 151.922 11.9375V10.2578C151.781 10.2812 151.57 10.2969 151.367 10.2969C150.695 10.2969 150.383 9.99219 150.383 9.35156V5.34375H151.93V3.625H150.383V1.69531H148.102Z"
            fill="#191919"
          />
          <path
            d="M37.6306 45.0205H31.1343V33.2447H37.6306V34.6649H32.6043V38.2682H37.1683V39.6821H32.6043V43.6067H37.6306V45.0205Z"
            fill="#191919"
          />
          <path
            d="M38.728 35.599H40.198V33.2447H41.5119V35.599H43.594V36.698H41.5119V42.1928C41.5119 43.4503 41.9762 43.9194 42.9048 43.9194H43.6773V45.0205C43.3451 45.078 43.0086 45.1049 42.6716 45.1008C41.0475 45.1008 40.121 44.0801 40.121 42.3534V36.698H38.728V35.599Z"
            fill="#191919"
          />
          <path
            d="M46.8002 39.1326V45.0205H45.4072V32.3021H46.8002V36.8396C47.0516 36.4209 47.4031 36.0734 47.822 35.8292C48.2409 35.585 48.7137 35.4521 49.1967 35.4426C50.8979 35.4426 51.9035 36.8565 51.9035 38.8241V45.0205H50.5127V39.0544C50.5127 37.4842 49.888 36.7783 48.7324 36.7783C47.5768 36.7783 46.8002 37.5624 46.8002 39.1326Z"
            fill="#191919"
          />
          <path
            d="M55.3849 40.7029V41.487C55.3849 43.0572 56.1574 43.9195 57.3192 43.9195C58.4019 43.9195 59.0974 43.2136 59.1744 42.0365H60.5674C60.4903 43.7631 59.2515 45.177 57.3192 45.177C55.387 45.177 53.9878 43.6849 53.9878 41.7237V38.8917C53.9878 36.9305 55.3807 35.4384 57.3192 35.4384C59.2577 35.4384 60.6507 36.9305 60.6507 38.8917V40.6987L55.3849 40.7029ZM59.2515 39.1327C59.2515 37.5624 58.479 36.698 57.3192 36.698C56.1595 36.698 55.3849 37.5624 55.3849 39.1327V39.6039H59.2515V39.1327Z"
            fill="#191919"
          />
          <path
            d="M66.7766 35.5209V36.8565H66.6288C65.392 36.8565 64.1552 37.5624 64.1552 39.289V45.0206H62.7622V35.599H63.999V37.0594C64.2457 36.6078 64.6034 36.2288 65.0372 35.9592C65.4711 35.6896 65.9663 35.5385 66.4747 35.5209H66.7766Z"
            fill="#191919"
          />
          <path
            d="M69.1837 40.7029V41.487C69.1837 43.0572 69.9562 43.9195 71.1181 43.9195C72.2008 43.9195 72.8962 43.2136 72.9733 42.0365H74.3662C74.2871 43.7631 73.0503 45.177 71.1181 45.177C69.1858 45.177 67.7866 43.6849 67.7866 41.7237V38.8917C67.7866 36.9305 69.1796 35.4384 71.1181 35.4384C73.0565 35.4384 74.4495 36.9305 74.4495 38.8917V40.6987L69.1837 40.7029ZM73.0503 39.1327C73.0503 37.5624 72.2778 36.698 71.1181 36.698C69.9583 36.698 69.1837 37.5624 69.1837 39.1327V39.6039H73.0503V39.1327Z"
            fill="#191919"
          />
          <path
            d="M81.3431 41.487V35.5991H82.7361V45.0206H81.4972V43.5116C81.2654 44.0015 80.9043 44.4165 80.454 44.7105C80.0037 45.0045 79.4819 45.166 78.9465 45.177C77.3225 45.177 76.2397 43.9195 76.2397 41.9583V35.5991H77.6306V41.7279C77.6306 43.296 78.3261 43.8413 79.4088 43.8413C80.579 43.8413 81.3431 43.0572 81.3431 41.487Z"
            fill="#191919"
          />
          <path
            d="M91.2372 39.1326V45.0205H89.8443V39.0544C89.8443 37.4842 89.2196 36.7783 88.1432 36.7783C87.0667 36.7783 86.288 37.5624 86.288 39.1326V45.0205H84.895V35.599H86.1339V37.1228C86.3508 36.6356 86.6972 36.2194 87.1341 35.9208C87.571 35.6221 88.0812 35.4529 88.6075 35.4321C89.1168 35.429 89.6145 35.5858 90.0327 35.8809C90.4509 36.1759 90.769 36.5949 90.9437 37.0805C91.1871 36.5879 91.56 36.1732 92.0212 35.8823C92.4823 35.5913 93.0138 35.4355 93.5567 35.4321C95.1808 35.4321 96.1865 36.8459 96.1865 38.8135V45.0205H94.7956V39.0544C94.7956 37.4842 94.171 36.7783 93.0924 36.7783C92.0139 36.7783 91.2372 37.5624 91.2372 39.1326Z"
            fill="#191919"
          />
          <path
            d="M110.029 41.0939C110.029 43.4503 108.561 45.2551 106.242 45.2551C103.922 45.2551 102.296 43.4503 102.296 41.0939V37.1693C102.296 34.815 103.92 33.0101 106.242 33.0101C108.563 33.0101 110.029 34.815 110.029 37.1693H108.48C108.403 35.5209 107.614 34.4219 106.237 34.4219C104.767 34.4219 103.839 35.599 103.839 37.5624V40.7029C103.839 42.6641 104.767 43.8413 106.237 43.8413C107.614 43.8413 108.403 42.7423 108.48 41.0939H110.029Z"
            fill="#191919"
          />
          <path
            d="M113.296 45.0205H111.903V32.3021H113.296V45.0205Z"
            fill="#191919"
          />
          <path
            d="M121.608 38.8177V45.0206H120.371V43.3869C119.875 44.4436 118.947 45.1769 117.664 45.1769C116.427 45.1769 115.034 44.3126 115.034 42.7423C115.034 39.289 120.138 40.6289 120.138 38.4268C120.149 38.1969 120.113 37.9671 120.031 37.7523C119.95 37.5375 119.825 37.3424 119.665 37.1796C119.504 37.0167 119.312 36.8897 119.101 36.8068C118.889 36.7239 118.663 36.6868 118.436 36.698C117.354 36.698 116.581 37.332 116.581 38.7395H115.188C115.188 36.8565 116.504 35.4426 118.436 35.4426C120.448 35.4426 121.608 36.8565 121.608 38.8177ZM120.217 41.3306V40.0752C119.271 41.2207 116.427 40.9206 116.427 42.5859C116.427 43.4503 117.123 43.9195 117.895 43.9195C119.134 43.9195 120.217 42.979 120.217 41.3306Z"
            fill="#191919"
          />
          <path
            d="M126.576 45.1769C124.72 45.1769 123.173 44.078 123.173 42.1928H124.564C124.564 43.3721 125.57 43.9195 126.576 43.9195C127.504 43.9195 128.433 43.3552 128.433 42.4295C128.433 40.2316 123.481 41.6433 123.481 38.1119C123.481 36.6198 124.951 35.4426 126.499 35.4426C128.277 35.4426 129.593 36.698 129.593 38.4268H128.2C128.211 38.1969 128.175 37.9671 128.093 37.7523C128.012 37.5375 127.887 37.3424 127.727 37.1796C127.566 37.0167 127.374 36.8897 127.163 36.8068C126.951 36.7239 126.725 36.6868 126.499 36.698C125.647 36.698 124.797 37.2327 124.797 38.1119C124.797 40.3098 129.747 38.8959 129.747 42.4295C129.747 43.9195 128.354 45.1769 126.576 45.1769Z"
            fill="#191919"
          />
          <path
            d="M134.386 45.1769C132.531 45.1769 130.984 44.078 130.984 42.1928H132.375C132.375 43.3721 133.38 43.9195 134.386 43.9195C135.315 43.9195 136.241 43.3552 136.241 42.4295C136.241 40.2316 131.292 41.6433 131.292 38.1119C131.292 36.6198 132.762 35.4426 134.309 35.4426C136.087 35.4426 137.401 36.698 137.401 38.4268H136.01C136.022 38.1969 135.985 37.9671 135.904 37.7523C135.822 37.5375 135.697 37.3424 135.537 37.1796C135.377 37.0167 135.185 36.8897 134.973 36.8068C134.762 36.7239 134.536 36.6868 134.309 36.698C133.457 36.698 132.608 37.2327 132.608 38.1119C132.608 40.3098 137.557 38.8959 137.557 42.4295C137.557 43.9195 136.173 45.1769 134.386 45.1769Z"
            fill="#191919"
          />
          <path
            d="M140.753 33.716H139.362V32.3021H140.753V33.716ZM140.753 45.0205H139.362V35.599H140.753V45.0205Z"
            fill="#191919"
          />
          <path
            d="M149.134 41.7237C149.134 43.6849 147.82 45.177 145.886 45.177C143.951 45.177 142.554 43.6849 142.554 41.7237V38.8917C142.554 36.9305 143.947 35.4384 145.886 35.4384C147.824 35.4384 149.134 36.9305 149.134 38.8917H147.743C147.743 37.7146 147.047 36.6938 145.886 36.6938C144.724 36.6938 143.953 37.5582 143.953 39.1284V41.487C143.953 43.0572 144.726 43.9195 145.886 43.9195C147.045 43.9195 147.743 42.9008 147.743 41.7237H149.134Z"
            fill="#191919"
          />
          <path
            d="M134.275 53.9898H131.223V48.5246H132.158V53.1529H134.275V53.9898Z"
            fill="#191919"
          />
          <path
            d="M138.334 52.6795H136.502L136.129 53.9898H135.196L136.883 48.5246H137.997L139.683 53.9898H138.715L138.334 52.6795ZM136.733 51.8764H138.103L137.422 49.4861L136.733 51.8764Z"
            fill="#191919"
          />
          <path
            d="M140.786 48.5246H142.689C143.709 48.5246 144.305 49.0339 144.305 49.9448C144.294 50.1976 144.213 50.442 144.069 50.6489C143.925 50.8557 143.726 51.0163 143.495 51.1113C144.147 51.3586 144.522 51.8193 144.522 52.4597C144.522 53.4065 143.795 53.9898 142.762 53.9898H140.786V48.5246ZM142.475 50.8197C143.012 50.8197 143.337 50.564 143.337 50.0546C143.337 49.5812 143.085 49.3551 142.475 49.3551H141.713V50.8197H142.475ZM141.713 51.6228V53.1592H142.581C143.229 53.1592 143.551 52.9183 143.551 52.3857C143.551 51.8531 143.206 51.6228 142.56 51.6228H141.713Z"
            fill="#191919"
          />
          <path
            d="M147.416 48.402C148.53 48.402 149.213 49.1459 149.213 50.2026H148.249C148.249 49.6193 147.961 49.2537 147.416 49.2537C146.914 49.2537 146.583 49.5326 146.583 49.9828C146.583 51.0395 149.275 50.4794 149.275 52.4977C149.275 53.4466 148.486 54.1166 147.48 54.1166C146.331 54.1166 145.542 53.4826 145.542 52.316H146.51C146.51 52.9204 146.847 53.2628 147.48 53.2628C147.982 53.2628 148.342 52.9585 148.342 52.4977C148.342 51.3311 145.648 51.9736 145.648 49.9828C145.663 49.0698 146.469 48.402 147.416 48.402Z"
            fill="#191919"
          />
          <path
            d="M18.4768 34.5402L23.0638 39.1982L12.7093 49.7081L2.35478 39.1982L12.7093 28.6883L17.2983 33.3441L18.1624 32.4649L12.7093 26.932L0.624512 39.1982L12.7093 51.4643L24.7941 39.1982L19.3409 33.6632L18.4768 34.5402Z"
            fill="#00A308"
          />
          <path
            d="M9.69258 41.3897L6.67139 44.4563L7.53548 45.3333L10.5567 42.2668"
            fill="#00A308"
          />
          <path
            d="M6.67139 33.94L17.89 45.327L18.7562 44.45L7.53548 33.0609"
            fill="#00A308"
          />
        </svg>
      </a>

    </section>
  );
};

export default AppWrapper;
