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

const TableFooterBase = ({ table }: any) => {
  return (
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
  );
};

export default memo(TableFooterBase);
