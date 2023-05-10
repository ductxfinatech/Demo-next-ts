import React, { useEffect, useMemo, useState, memo } from "react";
import {
  Box,
  Grid,
  Tooltip,
  Button,
  IconButton,
  InputLabel,
  Input,
  FormControl,
  ListItemIcon,
  List,
  ListItem,
  Popover,
  ListItemText,
  MenuItem,
  Menu,
} from "@mui/material";

import {
  Settings as SettingsIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  AccessTime as AccessTimeIcon,
  Clear as ClearIcon,
  Close as CloseIcon,
  Done as DoneIcon,
  DragIndicator as DragIndicatorIcon,
  DashboardCustomize as DashboardCustomizeIcon,
  Add as AddIcon,
  GetApp as GetAppIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Refresh as RefreshIcon,
} from "@mui/icons-material";

import MaterialReactTable, {
  type MRT_ColumnDef,
  type MRT_RowSelectionState,
  type MRT_Icons,
  MRT_Row,
  MRT_FullScreenToggleButton,
  MRT_ShowHideColumnsButton,
  MRT_GlobalFilterTextField,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
} from "material-react-table";

const TableHeaderBase = ({
  table,
  dataListCollumn,
  filterParams,
  onClearFilter,
  onClearAllFilter,
  onRefresh,
}: any) => {
  const isFilterParamsEmpty = () => {
    for (var key in filterParams) {
      if (filterParams[key].length > 0) {
        return false;
      }
    }
    return true;
  };

  const handleClearFilter = (typeFilter: string, key: string) => {
    onClearFilter(typeFilter, key);
  };

  const handleClearAllFilter = () => {
    onClearAllFilter();
  };

  const handleRefresh = () => {
    onRefresh();
  };

  const getLabelSelect = (value: string, key: string) => {
    if (!key) return "";
    const column =
      dataListCollumn.filter((item: any) => item.key === key)[0] || {};
    const label = column.listSelectOption.filter(
      (item: any) => item.value == value
    )[0].label;

    return label;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& .MuiCollapse-root.MuiCollapse-horizontal": {
            minWidth: "220px !important",
          },
          "& .MuiFormControl-root.MuiTextField-root": {
            minWidth: "unset",
          },
          "& .MuiInputBase-root.MuiOutlinedInput-root": {
            width: "220px",
            padding: "0 0 0 4px",
          },
        }}
      >
        <MRT_GlobalFilterTextField table={table} />
        <Box
          sx={{
            paddingLeft: "16px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {dataListCollumn.map((item: any) => {
            if (item.typeFilter.includes("minmax")) {
              return (
                <Box key={item.key} sx={{ display: "flex" }}>
                  {filterParams[item.key + "-min"]?.length > 0 ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        lineHeight: "20px",
                        marginRight: "16px",
                      }}
                    >
                      <Box sx={{ color: "#828D9A", marginRight: "4px" }}>
                        {item.label + " - min"}
                      </Box>
                      <Box sx={{ color: "#272E36" }}>
                        "{filterParams[item.key + "-min"]}"
                      </Box>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => {
                          handleClearFilter("text", item.key + "-min");
                        }}
                      >
                        <CloseIcon
                          sx={{ color: "#E6544F" }}
                          fontSize="inherit"
                        />
                      </IconButton>
                    </Box>
                  ) : (
                    <></>
                  )}

                  {filterParams[item.key + "-max"]?.length > 0 ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        lineHeight: "20px",
                        marginRight: "16px",
                      }}
                    >
                      <Box sx={{ color: "#828D9A", marginRight: "4px" }}>
                        {item.label + " - max"}
                      </Box>
                      <Box sx={{ color: "#272E36" }}>
                        "{filterParams[item.key + "-max"]}"
                      </Box>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => {
                          handleClearFilter("text", item.key + "-max");
                        }}
                      >
                        <CloseIcon
                          sx={{ color: "#E6544F" }}
                          fontSize="inherit"
                        />
                      </IconButton>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Box>
              );
            } else if (item.typeFilter === "select") {
              return (
                <Box key={item.key}>
                  {filterParams[item.key]?.length > 0 ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        lineHeight: "20px",
                        marginRight: "16px",
                      }}
                    >
                      <Box sx={{ color: "#828D9A", marginRight: "4px" }}>
                        {item.label}
                      </Box>
                      <Box sx={{ color: "#272E36" }}>
                        "{getLabelSelect(filterParams[item.key], item.key)}"
                      </Box>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => {
                          handleClearFilter(item.typeFilter, item.key);
                        }}
                      >
                        <CloseIcon
                          sx={{ color: "#E6544F" }}
                          fontSize="inherit"
                        />
                      </IconButton>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Box>
              );
            } else {
              return (
                <Box key={item.key}>
                  {filterParams[item.key]?.length > 0 ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        lineHeight: "20px",
                        marginRight: "16px",
                      }}
                    >
                      <Box sx={{ color: "#828D9A", marginRight: "4px" }}>
                        {item.label}
                      </Box>
                      <Box sx={{ color: "#272E36" }}>
                        "{filterParams[item.key]}"
                      </Box>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => {
                          handleClearFilter(item.typeFilter, item.key);
                        }}
                      >
                        <CloseIcon
                          sx={{ color: "#E6544F" }}
                          fontSize="inherit"
                        />
                      </IconButton>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Box>
              );
            }
          })}
          {!isFilterParamsEmpty() ? (
            <Button
              variant="text"
              size="small"
              sx={{
                textDecoration: "underline !important",
                textTransform: "initial",
                color: "#272E36",
              }}
              onClick={() => {
                handleClearAllFilter();
              }}
            >
              Xóa bộ lọc
            </Button>
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          minWidth: "340px",
          "& button": {
            fontSize: "14px",
            lineHeight: "20px",
          },
        }}
      >
        <Tooltip title="Refresh" arrow>
          <IconButton
            aria-label="refresh"
            sx={{
              height: "40px",
              padding: "5px",
              margin: "0 3px",
              "& .MuiSvgIcon-root": {
                fontSize: "30px",
              },
            }}
            onClick={() => {
              handleRefresh();
            }}
          >
            <RefreshIcon
              sx={{
                color: "#04A857",
                bgcolor: "#DDF6E8",
                borderRadius: "4px",
              }}
            />
          </IconButton>
        </Tooltip>
        <Button
          variant="contained"
          startIcon={<GetAppIcon />}
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          onClick={() => {
            console.log(table.getSelectedRowModel().rows);
          }}
          sx={{
            bgcolor: "#DDF6E8",
            color: "#04A857",
            padding: "6px 12px",
            textTransform: "unset",
            height: "32px",
            "&:hover": { bgcolor: "#a6e6c2" },
            "& .MuiSvgIcon-root": {
              fontSize: "20px",
            },
          }}
        >
          Xuất Excel
        </Button>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: "#04A857",
            color: "#DDF6E8",
            marginLeft: "8px",
            padding: "6px 12px",
            textTransform: "unset",
            height: "32px",
            "&:hover": { bgcolor: "#028343" },
            "& .MuiSvgIcon-root": {
              fontSize: "20px",
            },
          }}
        >
          Thêm mới
        </Button>
        <Box>
          <MRT_ShowHideColumnsButton
            table={table}
            sx={{
              height: "40px",
              padding: "5px",
              margin: "0 3px",
              "& .MuiSvgIcon-root": {
                fontSize: "30px",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default memo(TableHeaderBase);
