import {
  type Item2,
  data2,
  dataListCollumn2,
  ParamObject,
  TABLE_OPTIONS,
} from "./data";
import TableFooterBase from "../../components/BaseTable/TableFooterBase";
import TableHeaderBase from "../../components/BaseTable/TableHeaderBase";
import TableCollumnAction from "../../components/BaseTable/TableColumnAction";

import { MRT_Localization_VI } from "material-react-table/locales/vi";
import { ExportToCsv } from "export-to-csv";
import PopupState, {
  bindTrigger,
  bindPopover,
  bindMenu,
} from "material-ui-popup-state";
import React, { useEffect, useMemo, useRef, useState, memo } from "react";
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
  MRT_PaginationState,
  MRT_SortingState,
} from "material-react-table";

const Example = () => {
  // -------------- Data and Fetching state -----------------
  const [listItem, setListItem] = useState<any[]>(data2);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const [dataListCollumn, setDataListCollumn] = useState(dataListCollumn2);
  const [filterParams, setFilterParams] = useState(() => {
    let res: ParamObject = {};
    dataListCollumn2.forEach((item) => {
      if (item.type === "text" || item.type === "status") {
        res[item.key] = "";
      } else if (item.type === "number" || item.type === "date") {
        res[item.key + "-min"] = "";
        res[item.key + "-max"] = "";
      }
    });

    return res;
  });

  const [listCollumnObject, setListCollumnObject] = useState(() => {
    let res: ParamObject = {};
    dataListCollumn2.forEach((item: any) => {
      res[item.key] = item;
    });

    return res;
  });

  const handleFilterFormChange = (newValue: object) => {
    setFilterParams({ ...filterParams, ...newValue });
  };

  const handleClearFilter = (typeFilter: string, key: string) => {
    if (typeFilter.includes("minmax")) {
      setFilterParams({
        ...filterParams,
        [key + "-min"]: "",
        [key + "-max"]: "",
      });
    } else {
      setFilterParams({
        ...filterParams,
        [key]: "",
      });
    }
  };

  const handleClearAllFilter = () => {
    setFilterParams(() => {
      let res: ParamObject = {};
      dataListCollumn2.forEach((item) => {
        if (item.type === "text" || item.type === "status") {
          res[item.key] = "";
        } else if (item.type === "number" || item.type === "date") {
          res[item.key + "-min"] = "";
          res[item.key + "-max"] = "";
        }
      });

      return res;
    });
  };

  // ----------- End Data and Fetching state -----------------

  // ---------------- Table state ------------------------
  const [tableOptions, setTableOptions] = useState(TABLE_OPTIONS);
  // Pagination
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  // Global filter
  const [globalFilter, setGlobalFilter] = useState("");
  // Sorting
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  // Row select
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});
  // Icon Table
  const iconsTable: Partial<MRT_Icons> = {
    // ArrowDownwardIcon: () => <ArrowDownwardIcon />,
    // ClearAllIcon: () => <Box>d</Box>,
    // DensityLargeIcon: () => <Box>d</Box>,
    // DensityMediumIcon: () => <Box>d</Box>,
    // DensitySmallIcon: () => <Box>d</Box>,
    DragHandleIcon: () => <DragIndicatorIcon />,
    // FilterListIcon: (props: any) => <Box>d</Box>,
    // FilterListOffIcon: () => <Box>d</Box>,
    // FullscreenExitIcon: () => <Box>d</Box>,
    // FullscreenIcon: () => <Box>d</Box>,
    // SearchIcon: (props: any) => <Box>d</Box>,
    // SearchOffIcon: () => <Box>d</Box>,
    MoreVertIcon: () => <ArrowDropDownIcon />,
    // MoreHorizIcon: () => <Box>d</Box>,
    // SortIcon: <Box>fg</Box>,
    // PushPinIcon: <Box>d</Box>,
    // VisibilityOffIcon: () => <Box>d</Box>,
    ViewColumnIcon: () => (
      <DashboardCustomizeIcon
        sx={{ color: "#04A857", bgcolor: "#DDF6E8", borderRadius: "4px" }}
      />
    ),
  };
  // Set Header Table
  const columns2 = useMemo(() => {
    return dataListCollumn.map((item: any) => {
      return {
        accessorKey: item.key,
        header: item.type,
        type: item.type,
        minSize: item.minSize,
        maxSize: item.maxSize,
        size: item.size,
        enableClickToCopy: item.enableClickToCopy,
        enableResizing: !(item.type === "setting" || item.type === "status"),
        enableSorting: !(item.type === "setting"),
        enableColumnActions: item.type !== "setting",
        debugColumns: true,
        Header: (cell) => (
          <Box
            sx={{ padding: item.align !== "left" ? "0 0 0 6px" : "0 0px 0 0" }}
          >
            {item.label}
          </Box>
        ),
        Cell: ({ cell }) => {
          switch (item.type) {
            case "setting": {
              return (
                <>
                  <PopupState
                    variant="popover"
                    popupId={"demo-popup-popover-" + cell.row.original.id}
                  >
                    {(popupState) => (
                      <div>
                        <IconButton
                          sx={{ color: "#000" }}
                          {...bindTrigger(popupState)}
                        >
                          <SettingsIcon />
                        </IconButton>

                        <Menu {...bindMenu(popupState)}>
                          <MenuItem
                            onClick={() => {
                              handleShow(
                                cell.row.original.id,
                                popupState.close
                              );
                            }}
                          >
                            Xem
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleEdit(
                                cell.row.original.id,
                                popupState.close
                              );
                            }}
                          >
                            Sửa
                          </MenuItem>
                          <MenuItem
                            sx={{ color: "#E6544F" }}
                            onClick={() => {
                              handleDelete(
                                cell.row.original.id,
                                popupState.close
                              );
                            }}
                          >
                            Xóa
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleActive(
                                cell.row.original.id,
                                popupState.close
                              );
                            }}
                          >
                            Inactive
                          </MenuItem>
                        </Menu>
                      </div>
                    )}
                  </PopupState>
                </>
              );
            }
            case "status": {
              switch (cell.getValue<any>()) {
                case 1: {
                  return (
                    <Tooltip title="Duyệt" arrow>
                      <DoneIcon sx={{ color: "#04A857" }} />
                    </Tooltip>
                  );
                }
                case 2: {
                  return (
                    <Tooltip title="Chờ duyệt" arrow>
                      <AccessTimeIcon sx={{ color: "#FFB80B" }} />
                    </Tooltip>
                  );
                }
                case 3: {
                  return (
                    <Tooltip title="Từ chối" arrow>
                      <ClearIcon sx={{ color: "#E6544F" }} />
                    </Tooltip>
                  );
                }
                default: {
                  return (
                    <Tooltip title="Từ chối" arrow>
                      <ClearIcon sx={{ color: "#E6544F" }} />
                    </Tooltip>
                  );
                }
              }
            }
            default: {
              return <>{cell.getValue<string>()}</>;
            }
          }
        },
        muiTableHeadCellProps: {
          align: item.align,
          sx: {
            padding: "8px 12px !important",
          },
        },
        muiTableBodyCellProps: {
          align: item.align,
          sx: {},
        },
      };
    }) as MRT_ColumnDef<any>[];
  }, []);

  // ---------------- End Table state ------------------------

  // ------------- Common -----------------

  const csvOptions = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: dataListCollumn2.map((c) => c.label),
  };
  const csvExporter = new ExportToCsv(csvOptions);

  // ------------ End Common --------------

  // -------------- Function -----------------------
  // Handle Action
  const handleShow = (id: number, closePopup: Function) => {
    console.log("See Detail", id);
    closePopup();
  };
  const handleEdit = (id: number, closePopup: Function) => {
    console.log("Edit", id);
    closePopup();
  };
  const handleDelete = (id: number, closePopup: Function) => {
    console.log("Delete", id);
    closePopup();
  };
  const handleActive = (id: number, closePopup: Function) => {
    console.log("Active", id);
    closePopup();
  };
  // Export CSV
  const handleExportRows = (rows: MRT_Row<any>[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  // Get data
  const getData = () => {
    setIsLoading(true);
    console.log("Get data");
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // Handle refresh
  const handleRefresh = () => {
    getData();
  };

  // -------------- End Function -----------------------

  useEffect(() => {
    getData();
  }, [sorting, pagination, globalFilter, filterParams]);

  return (
    <Box sx={{ minHeight: "100vh", padding: "20px 20px 20px 264px" }}>
      <Box
        className="table-generic"
        sx={{
          "& > div.MuiPaper-root": {
            boxShadow: "none !important",
          },
        }}
      >
        <MaterialReactTable
          columns={columns2}
          data={listItem}
          state={{
            rowSelection,
            pagination,
            globalFilter,
            sorting,
            showGlobalFilter: true,
            showColumnFilters: true,
            // isLoading,
            showSkeletons: isLoading,
          }}
          onSortingChange={setSorting}
          onPaginationChange={setPagination}
          onGlobalFilterChange={setGlobalFilter}
          icons={iconsTable}
          getRowId={(row) => row.id.toString()}
          onRowSelectionChange={setRowSelection}
          enableRowSelection={tableOptions.enableRowSelection}
          enableColumnResizing={tableOptions.enableColumnResizing}
          enableColumnOrdering={tableOptions.enableColumnOrdering}
          enableColumnDragging={tableOptions.enableColumnDragging}
          enablePinning={tableOptions.enablePinning}
          enableStickyHeader={tableOptions.enableStickyHeader}
          manualPagination={tableOptions.manualPagination}
          rowCount={100}
          positionToolbarAlertBanner="bottom"
          globalFilterFn="contains"
          localization={MRT_Localization_VI}
          muiSearchTextFieldProps={{
            placeholder: "Tìm kiếm",
            sx: {
              minWidth: "18rem",
              "& .MuiSvgIcon-root": { color: "#828D9A", fontSize: "22px" },
              "& input": { padding: "8px", fontSize: "14px" },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #CFD6DD !important",
              },
            },
            variant: "outlined",
          }}
          muiToolbarAlertBannerProps={
            isError
              ? {
                  color: "error",
                  children: "Error loading data",
                }
              : undefined
          }
          muiTableContainerProps={{
            sx: {
              maxHeight: "600px",

              "& .Mui-selected": {
                bgcolor: "#04a85714 !important",
              },
              "& .Mui-selected:hover": {
                bgcolor: "#0cc00042 !important",
              },
            },
          }}
          muiTableHeadProps={{
            sx: {},
          }}
          muiTableHeadRowProps={{
            sx: {
              "& th": {
                borderColor: "#CFD6DD",
                borderWidth: "1px 1px 2px 0",
                borderStyle: "solid",
                bgcolor: "#E2E6EA",
                fontSize: "12px",
                lineHeight: "16px",
                verticalAlign: "middle",

                "& .Mui-checked": {
                  color: "#04A857",
                },
                "& .MuiCheckbox-indeterminate": {
                  color: "#04A857 ",
                },
                "& .Mui-TableHeadCell-ResizeHandle-Wrapper": {
                  right: "-3px",
                  opacity: "0.05",
                  "& hr, hr:active": {
                    borderColor: "#000",
                    height: "32px",
                  },
                },
                "& .Mui-TableHeadCell-Content-Labels": {
                  padding: "0",
                },

                "& .MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered":
                  {
                    display: "none",
                  },
              },
              "& th:nth-of-type(1)": {
                borderWidth: "1px 1px 2px 1px",
                padding: "4px 12px !important",
                width: "50px",
              },
            },
          }}
          muiTableBodyRowProps={{
            sx: {
              height: "auto !important",

              "& td": {
                borderColor: "#CFD6DD",
                borderWidth: "0 1px 1px 0",
                borderStyle: "solid",
                padding: "8px 12px !important",

                "& .Mui-checked": {
                  color: "#04A857",
                },
              },

              "& td:nth-of-type(1)": {
                borderWidth: "0 1px 1px 1px",
              },
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
            },
          }}
          muiSelectCheckboxProps={{ sx: {} }}
          renderTopToolbar={({ table }) => (
            <TableHeaderBase
              table={table}
              dataListCollumn={dataListCollumn}
              filterParams={filterParams}
              onClearFilter={handleClearFilter}
              onClearAllFilter={handleClearAllFilter}
              onRefresh={handleRefresh}
            ></TableHeaderBase>
          )}
          renderBottomToolbar={({ table }) => <TableFooterBase table={table} />}
          renderColumnActionsMenuItems={({ closeMenu, column }) => {
            const collumnOption = listCollumnObject[column.id];
            return [
              <TableCollumnAction
                collumnOption={collumnOption}
                filterParams={filterParams}
                // onSearch={handleFilterFormChange}
                // closeMenu={closeMenu}
                key={collumnOption.key}
              ></TableCollumnAction>,
            ];
          }}
        />
      </Box>
      <style lang="scss">
        {`
                div:has(.filter-column) {
                    .MuiMenu-list {
                        padding-right: 0 !important;
                        width: 100% !important;
                        .MuiMenuItem-root {
                            display: none;
                        }
                    }
                }
                `}
      </style>
    </Box>
  );
};

export default Example;
