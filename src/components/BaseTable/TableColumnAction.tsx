import React, { useEffect, useRef, useMemo, useState, memo } from "react";
import { Box, Grid, Button } from "@mui/material";

export interface ParamObject {
  [key: string]: any;
}

const TableCollumnAction = ({
  collumnOption,
  filterParams,
  onSearch,
  closeMenu,
}: any) => {

  useEffect(() => {
    GenerateInput();
  }, []);

  const GenerateInput = () => {
    if (collumnOption.typeFilter.includes("minmax")) {
      let keyMin = collumnOption.key + "-min";
      let keyMax = collumnOption.key + "-max";
      const checkMin = document.querySelector(
        ".input-filter-" + keyMin + " input"
      );
      const checkMax = document.querySelector(
        ".input-filter-" + keyMax + " input"
      );

      if (!checkMin) {
        const Ele = document.querySelector(".temp-input-group #" + keyMin);
        const Parent = document.querySelector(".input-filter-" + keyMin);

        if (Ele && Parent) {
          // const EleClone = Ele.cloneNode(true);
          const EleClone = Ele;
          Parent?.appendChild(EleClone);
        }

        const inputElementMin = document.querySelector(
          ".input-filter-" + keyMin + " input"
        ) as HTMLInputElement;

        inputElementMin.value = filterParams[keyMin] ?? "";
      }
      if (!checkMax) {
        const Ele = document.querySelector(".temp-input-group #" + keyMax);
        const Parent = document.querySelector(".input-filter-" + keyMax);

        if (Ele && Parent) {
          // const EleClone = Ele.cloneNode(true);
          const EleClone = Ele;
          Parent.appendChild(EleClone);
        }

        const inputElementMax = document.querySelector(
          ".input-filter-" + keyMax + " input"
        ) as HTMLInputElement;

        inputElementMax.value = filterParams[keyMax] ?? "";
      }
    } else {
      const check = document.querySelector(
        ".input-filter-" + collumnOption.key + " input"
      );
      if (check) return;

      const Ele = document.querySelector(
        ".temp-input-group #" + collumnOption.key
      );
      const Parent = document.querySelector(
        ".input-filter-" + collumnOption.key
      );
      if (Ele && Parent) {
        const EleClone = Ele.cloneNode(true);
        Parent?.appendChild(Ele);
      }

      const inputElement = document.getElementsByName(
        collumnOption.key
      )[0] as HTMLInputElement;
      inputElement.value = filterParams[collumnOption.key] ?? "";
    }
  };

  const handleClearFilter = (typeFilter: any, key: any) => {
    if (typeFilter.includes("minmax")) {
      let keyMin = key + "-min";
      let keyMax = key + "-max";

      const inputElementMin = document.getElementsByName(
        keyMin
      )[0] as HTMLInputElement;
      const inputElementMax = document.getElementsByName(
        keyMax
      )[0] as HTMLInputElement;

      inputElementMin.value = "";
      inputElementMax.value = "";

      onSearch({
        [keyMin]: inputElementMin.value,
        [keyMax]: inputElementMax.value,
      });
    } else {
      const inputElement = document.getElementsByName(
        key
      )[0] as HTMLInputElement;
      inputElement.value = "";
      onSearch({ [key]: inputElement.value });
    }
  };

  const handleOnSearchFilterColumn = () => {
    if (collumnOption.typeFilter.includes("minmax")) {
      let keyMin = collumnOption.key + "-min";
      let keyMax = collumnOption.key + "-max";

      const inputElementMin = document.querySelector(
        ".input-filter-" + keyMin + " input"
      ) as HTMLInputElement;
      const inputElementMax = document.querySelector(
        ".input-filter-" + keyMax + " input"
      ) as HTMLInputElement;

      closeMenu();
      onSearch({
        [keyMin]: inputElementMin.value,
        [keyMax]: inputElementMax.value,
      });
    } else {
      const inputElement = document.querySelector(
        ".input-filter-" + collumnOption.key + " input"
      ) as HTMLInputElement;
      if (inputElement) {
        closeMenu();
        onSearch({ [collumnOption.key]: inputElement.value });
      }
    }
  };

  switch (collumnOption.typeFilter) {
    case "text": {
      return (
        <Box
          className={"filter-column"}
          sx={{
            padding: "16px",
            width: "332px",
            "& label": {
              display: "block",
              marginBottom: "4px",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
            },

            "& input": {
              display: "block",
              fontSize: "14px",
              lineHeight: "20px",
              width: "100%",
              height: "32px",
              padding: "6px 8px",
              borderRadius: "4px",
              border: "1px solid #CFD6DD !important",
            },
          }}
        >
          <Box className={"input-filter-" + collumnOption.key}>
            <label htmlFor={collumnOption.key}>Tìm kiếm</label>
            {/* <input
            id={collumnOption.key}
            name={collumnOption.key}
            type="text"
          /> */}
          </Box>
          <Box
            sx={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{
                bgcolor: "#E2E6EA",
                color: "#272E36",
                width: "138px",
                padding: "6px auto",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                textTransform: "initial",
                "&:hover": { bgcolor: "#d1d6db" },
              }}
              variant="contained"
              color="success"
              onClick={() => {
                handleClearFilter(collumnOption.typeFilter, collumnOption.key);
              }}
            >
              Đặt lại
            </Button>
            <Button
              sx={{
                bgcolor: "#04A857",
                color: "#DDF6E8",
                width: "138px",
                padding: "6px auto",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                textTransform: "initial",
                "&:hover": { bgcolor: "#028343" },
              }}
              variant="contained"
              color="success"
              onClick={() => {
                handleOnSearchFilterColumn();
              }}
            >
              Tìm kiếm
            </Button>
          </Box>
        </Box>
      );
    }
    case "minmaxNumber": {
      return (
        <Box
          className="filter-column"
          sx={{
            padding: "16px",
            width: "332px",
            "& label": {
              display: "block",
              marginBottom: "4px",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
            },

            "& input": {
              display: "block",
              fontSize: "14px",
              lineHeight: "20px",
              height: "32px",
              width: "100%",
              padding: "6px 8px",
              borderRadius: "4px",
              border: "1px solid #CFD6DD !important",
            },
          }}
        >
          <Grid container columns={12} columnSpacing={3} sx={{}}>
            <Grid
              className={"input-filter-" + collumnOption.key + "-min"}
              item
              xs={6}
            >
              <label htmlFor={collumnOption.key + "-min"}>Min</label>
              {/* <input
                id={collumnOption.key + "-min"}
                name={collumnOption.key + "-min"}
                type="number"
              /> */}
            </Grid>
            <Grid
              className={"input-filter-" + collumnOption.key + "-max"}
              item
              xs={6}
            >
              <label htmlFor={collumnOption.key + "-max"}>Max</label>
              {/* <input
                id={collumnOption.key + "-max"}
                name={collumnOption.key + "-max"}
                type="number"
              /> */}
            </Grid>
          </Grid>
          <Box
            sx={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{
                bgcolor: "#E2E6EA",
                color: "#272E36",
                width: "138px",
                padding: "6px auto",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                textTransform: "initial",
                "&:hover": { bgcolor: "#d1d6db" },
              }}
              variant="contained"
              color="success"
              onClick={() => {
                handleClearFilter(collumnOption.typeFilter, collumnOption.key);
              }}
            >
              Đặt lại
            </Button>
            <Button
              sx={{
                bgcolor: "#04A857",
                color: "#DDF6E8",
                width: "138px",
                padding: "6px auto",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                textTransform: "initial",
                "&:hover": { bgcolor: "#028343" },
              }}
              variant="contained"
              color="success"
              onClick={() => {
                handleOnSearchFilterColumn();
              }}
            >
              Tìm kiếm
            </Button>
          </Box>
        </Box>
      );
    }
    case "minmaxDate": {
      return (
        <Box
          className="filter-column"
          sx={{
            padding: "16px",
            width: "332px",
            "& label": {
              display: "block",
              marginBottom: "4px",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
            },

            "& input": {
              display: "block",
              fontSize: "14px",
              lineHeight: "20px",
              height: "32px",
              width: "100%",
              padding: "6px 8px",
              borderRadius: "4px",
              border: "1px solid #CFD6DD !important",
            },
          }}
        >
          <Grid container columns={12} rowSpacing={2.5} sx={{}}>
            <Grid
              className={"input-filter-" + collumnOption.key + "-min"}
              item
              xs={12}
            >
              <label htmlFor={collumnOption.key + "-min"}>Min</label>
              {/* <input
                id={collumnOption.key + "-min"}
                name={collumnOption.key + "-min"}
                type="date"
              /> */}
            </Grid>
            <Grid
              className={"input-filter-" + collumnOption.key + "-max"}
              item
              xs={12}
            >
              <label htmlFor={collumnOption.key + "-max"}>Max</label>
              {/* <input
                id={collumnOption.key + "-max"}
                name={collumnOption.key + "-max"}
                type="date"
              /> */}
            </Grid>
          </Grid>
          <Box
            sx={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{
                bgcolor: "#E2E6EA",
                color: "#272E36",
                width: "138px",
                padding: "6px auto",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                textTransform: "initial",
                "&:hover": { bgcolor: "#d1d6db" },
              }}
              variant="contained"
              color="success"
              onClick={() => {
                handleClearFilter(collumnOption.typeFilter, collumnOption.key);
              }}
            >
              Đặt lại
            </Button>
            <Button
              sx={{
                bgcolor: "#04A857",
                color: "#DDF6E8",
                width: "138px",
                padding: "6px auto",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                textTransform: "initial",
                "&:hover": { bgcolor: "#028343" },
              }}
              variant="contained"
              color="success"
              onClick={() => {
                handleOnSearchFilterColumn();
              }}
            >
              Tìm kiếm
            </Button>
          </Box>
        </Box>
      );
    }
    case "select": {
      return (
        <Box
          className="filter-column"
          sx={{
            padding: "16px",
            width: "332px",
            "& label": {
              display: "block",
              marginBottom: "4px",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
            },

            "& select": {
              display: "block",
              fontSize: "14px",
              lineHeight: "20px",
              height: "32px",
              width: "100%",
              padding: "6px 8px",
              borderRadius: "4px",
              border: "1px solid #CFD6DD !important",
            },
          }}
        >
          <Grid container columns={12} sx={{}}>
            <Grid className={"input-filter-" + collumnOption.key} item xs={12}>
              <label htmlFor={collumnOption.key}>Bộ lọc</label>
              {/* <select name={collumnOption.key} id={collumnOption.key}>
                {collumnOption.listSelectOption?.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select> */}
            </Grid>
          </Grid>
          <Box
            sx={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{
                bgcolor: "#E2E6EA",
                color: "#272E36",
                width: "138px",
                padding: "6px auto",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                textTransform: "initial",
                "&:hover": { bgcolor: "#d1d6db" },
              }}
              variant="contained"
              color="success"
              onClick={() => {
                handleClearFilter(collumnOption.typeFilter, collumnOption.key);
              }}
            >
              Đặt lại
            </Button>
            <Button
              sx={{
                bgcolor: "#04A857",
                color: "#DDF6E8",
                width: "138px",
                padding: "6px auto",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                textTransform: "initial",
                "&:hover": { bgcolor: "#028343" },
              }}
              variant="contained"
              color="success"
              onClick={() => {
                handleOnSearchFilterColumn();
              }}
            >
              Tìm kiếm
            </Button>
          </Box>
        </Box>
      );
    }
    default: {
      return <></>;
    }
  }
};

export default TableCollumnAction;
