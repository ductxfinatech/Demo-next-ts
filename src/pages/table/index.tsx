import { type Item2, data2, dataListCollumn2, ParamObject } from "./data";
import { MRT_Localization_VI } from "material-react-table/locales/vi";
import { ExportToCsv } from "export-to-csv";
import PopupState, {
  bindTrigger,
  bindPopover,
  bindMenu,
} from "material-ui-popup-state";
import React, { useEffect, useMemo, useState } from "react";
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
  Done as DoneIcon,
  DragIndicator as DragIndicatorIcon,
  DashboardCustomize as DashboardCustomizeIcon,
  Add as AddIcon,
  GetApp as GetAppIcon,
  ArrowDropDown as ArrowDropDownIcon,
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
  const [listItem, setListItem] = useState<Item2[]>(data2);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const [filterParams, setFilterParams] = useState({});
  const [filterForm, setFilterForm] = useState(() => {
    let res: ParamObject = {}
    dataListCollumn2.forEach((item) => {
      let str = 'fff'
      if(item.type === 'text') {
        res[item.key] = '';
      } else if(item.type === 'number' || item.type === 'date') {
        res[item.key + '-min'] = '';
        res[item.key + '-max'] = '';
      }
    })

    return res;
  });

  const handleFilterFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    console.log(name, value)
    // setFilterForm({ ...filterForm, [name]: value })
    let res = filterForm
    res[name] = value
    console.log(res)
    setFilterForm(res)
  }

  // ----------- End Data and Fetching state -----------------

  // ---------------- Table state ------------------------
  // Pagination cfg
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
      <DashboardCustomizeIcon sx={{ color: "#04A857", bgcolor: "#DDF6E8" }} />
    ),
  };
  // Set Header Table
  const columns2 = useMemo(() => {
    return dataListCollumn2.map((item: any) => {
      return {
        accessorKey: item.key,
        header: item.label,
        // type: item.type,
        minSize: item.minSize,
        maxSize: item.maxSize,
        size: item.size,
        enableClickToCopy: item.copy,
        enableResizing: !(item.type === "setting" || item.type === "icon"),
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
                  <PopupState variant="popover" popupId="demo-popup-popover">
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
            case "icon": {
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
            // maxWidth: item.maxSize,
            padding: "8px 12px !important",
          },
        },
        muiTableBodyCellProps: {
          align: item.align,
          sx: {
            // maxWidth: item.maxSize,
          },
        },

        enableColumnActions:
          item.type === "text" ||
          item.type === "number" ||
          item.type === "date",

        renderColumnActionsMenuItems: ({ closeMenu, column, table }) => {
          switch (item.type) {
            case "text": {
              return [
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
                      width: "100%",
                      height: "32px",
                      padding: "6px 8px",
                      borderRadius: '4px',
                      border: '1px solid #CFD6DD !important',
                    },
                  }}
                >
                  <label htmlFor={item.key}>Tìm kiếm</label>
                  <input id={item.key} name={item.key} value={filterForm[item.key]} onChange={handleFilterFormChange} type="text" />
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
                    >
                      Tìm kiếm
                    </Button>
                  </Box>
                </Box>,
              ];
            }
            case "number": {
              return [
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
                      borderRadius: '4px',
                      border: '1px solid #CFD6DD !important',
                    },
                  }}
                >
                  <Grid container columns={12} columnSpacing={3} sx={{}}>
                    <Grid item xs={6}>
                      <label htmlFor={item.key + "-min"}>Min</label>
                      <input id={item.key + "-min"} name={item.key + "-min"} value={filterForm[item.key + "-min"]} type="number" />
                    </Grid>
                    <Grid item xs={6}>
                      <label htmlFor={item.key + "-max"}>Max</label>
                      <input id={item.key + "-max"} name={item.key + "-max"} value={filterForm[item.key + "-max"]} type="number" />
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
                    >
                      Tìm kiếm
                    </Button>
                  </Box>
                </Box>,
              ];
            }
            default: {
              return [];
            }
          }
        },
      };
    }) as MRT_ColumnDef<(typeof data2)[0]>[];
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
  const handleExportRows = (rows: MRT_Row<Item2>[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  // -------------- End Function -----------------------

  useEffect(() => {
    //do something when the row selection changes...
    console.info({ rowSelection });
    console.info({ sorting });
    console.info({ pagination });
    console.info({ globalFilter });
  }, [rowSelection, sorting, pagination, globalFilter]);

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
          }}
          onSortingChange={setSorting}
          onPaginationChange={setPagination}
          onGlobalFilterChange={setGlobalFilter}
          icons={iconsTable}
          getRowId={(row) => row.id.toString()}
          onRowSelectionChange={setRowSelection}
          enableRowSelection
          enableColumnResizing
          enableColumnOrdering
          enableColumnDragging={false}
          enablePinning
          enableStickyHeader
          manualPagination
          rowCount={100}
          positionToolbarAlertBanner="bottom"
          enableFilterMatchHighlighting={true}
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
                  opacity: "0.15",
                  "& hr, hr:active": {
                    borderColor: "#000",
                    height: "32px",
                  },
                },
                "& .Mui-TableHeadCell-Content-Labels": {
                  padding: "0",
                },
              },
              "& th:nth-child(1)": {
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

              "& td:nth-child(1)": {
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
          // muiSelectCheckboxProps={{
          //     sx: {

          //     }
          // }}

          renderTopToolbar={({ table }) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
              }}
            >
              <Box
                sx={{
                  "& .MuiInputBase-root.MuiOutlinedInput-root": {
                    width: "220px",
                    padding: "0 0 0 4px",
                  },
                }}
              >
                <MRT_GlobalFilterTextField table={table} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& button": {
                    fontSize: "14px",
                    lineHeight: "20px",
                  },
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<GetAppIcon />}
                  disabled={
                    !table.getIsSomeRowsSelected() &&
                    !table.getIsAllRowsSelected()
                  }
                  onClick={() => {
                    handleExportRows(table.getSelectedRowModel().rows);
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
                      margin: "0 12px",
                      "& .MuiSvgIcon-root": {
                        fontSize: "30px",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          renderBottomToolbar={({ table }) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #CFD6DD",
              }}
            >
              <Box
                sx={{
                  "& .MuiAlert-message": {
                    bgcolor: "#fff !important",
                  },
                }}
              >
                <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
              </Box>
              <Box sx={{ bgcolor: "#fff !important" }}>
                <MRT_TablePagination table={table} />
              </Box>
            </Box>
          )}
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
