import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable, {
    type MRT_ColumnDef,
    type MRT_RowSelectionState,
    type MRT_Icons
} from 'material-react-table';
import { Box } from '@mui/material';
import { data, data2, dataListCollumn, dataListCollumn2 } from './data';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ClearIcon from '@mui/icons-material/Clear';
import SettingsIcon from '@mui/icons-material/Settings';
import { MRT_Localization_VI } from 'material-react-table/locales/vi';

const Example = () => {

    // Set Header
    const columns = useMemo(() => {
        return dataListCollumn.map((item: any) => {
            return {
                accessorKey: item.key,
                header: item.label,
                type: item.type,
                // Header: () => (
                //     <div style={{ width: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}> <Box sx={{ pr: 3 }}>{item.label}</Box> <ArrowDropDownIcon sx={{ position: 'absolute', right: '0', top: '0' }} /> </div>
                // ),
                // muiTableHeadCellProps: {
                //     align: item.type === 'number' ? 'right' : 'left',
                //     width: '500px'
                // },
                // muiTableBodyCellProps: {
                //     align: 'right',
                //     width: '100%'
                // },
            }
        }) as MRT_ColumnDef<(typeof data)[0]>[]
    }, [])

    const columns2 = useMemo(() => {
        return dataListCollumn2.map((item: any) => {
            return {
                accessorKey: item.key,
                header: item.label,
                // type: item.type,
                minSize: item.minSize,
                maxSize: item.maxSize,
                size: item.size,
                Header: (cell) => (
                    <Box sx={{ padding: '0 !important' }}>{item.label}</Box>
                ),
                Cell: ({ cell }) => {
                    switch (item.type) {
                        case 'setting': {
                            return <><SettingsIcon sx={{}} /></>
                        }
                        case 'icon': {
                            switch (cell.getValue<any>()) {
                                case 1: {
                                    return <>
                                        <Tooltip title="Duyệt">
                                            <IconButton>
                                                <DoneIcon sx={{ color: '#04A857' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </>
                                }
                                case 2: {
                                    return <>
                                        <Tooltip title="Chờ duyệt">
                                            <IconButton>
                                                <AccessTimeIcon sx={{ color: '#FFB80B' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </>
                                }
                                case 3: {
                                    return <>
                                        <Tooltip title="Từ chối">
                                            <IconButton>
                                                <ClearIcon sx={{ color: '#E6544F' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </>
                                }
                                default: {
                                    return <>
                                        <ClearIcon sx={{ color: '#E6544F' }} />
                                    </>
                                }
                            }
                        }
                        default: {
                            return <>{cell.getValue<string>()}</>
                        }

                    }
                },
                muiTableHeadCellProps: {
                    align: (item.type === 'text')
                        ? 'left' :
                        ((item.type === 'number')
                            ? 'right' : 'center'),
                    sx: {
                        // maxWidth: item.maxSize,
                        padding: '8px 12px !important',
                    }
                },
                muiTableBodyCellProps: {
                    align: (item.type === 'text')
                        ? 'left' :
                        ((item.type === 'number')
                            ? 'right' : 'center'),
                    sx: {
                        // maxWidth: item.maxSize,
                    }
                },
            }
        }) as MRT_ColumnDef<(typeof data2)[0]>[]
    }, [])

    // Set Data
    const rows = data
    const rows2 = data2

    // Row select
    const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

    useEffect(() => {
        //do something when the row selection changes...
        console.info({ rowSelection });
    }, [rowSelection]);

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
        // MoreVertIcon: () => <Box>d</Box>,
        // MoreHorizIcon: () => <Box>d</Box>,
        // SortIcon: <Box>fg</Box>,
        // PushPinIcon: <Box>d</Box>,
        // VisibilityOffIcon: () => <Box>d</Box>,
        ViewColumnIcon: () => <DashboardCustomizeIcon />,
    }

    return (
        <Box sx={{ minHeight: '100vh', padding: '20px 12px 20px 264px' }}>

            <MaterialReactTable
                columns={columns2}
                data={rows2}
                icons={iconsTable}
                getRowId={(row) => row.id.toString()}

                onRowSelectionChange={setRowSelection}
                enableRowSelection
                enableColumnResizing
                enableColumnOrdering
                enableColumnDragging={false}
                enableColumnActions={false}
                enablePinning
                enableStickyHeader
                enableFullScreenToggle={false}
                enableDensityToggle={false}
                positionToolbarAlertBanner="bottom"

                enableColumnFilters={false}
                // globalFilterModeOptions={['contains']}
                // enableGlobalFilterModes={true}
                positionGlobalFilter="left"
                localization={MRT_Localization_VI}
                muiSearchTextFieldProps={{
                    placeholder: 'Search Column Options',
                    sx: {
                        minWidth: '18rem',
                        '& input': { padding: '8px' },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#000 !important'
                        }
                    },
                    variant: 'outlined',
                }}

                state={{ rowSelection }}

                initialState={{
                    pagination: { pageSize: 20, pageIndex: 0 },
                    showGlobalFilter: true,
                }}
                muiTableContainerProps={{ sx: { maxHeight: '300px' } }}
                muiTableHeadProps={{
                    sx: {
                        '& tr': {
                        },
                        '& th': {
                            border: '1px solid #CFD6DD',
                            backgroundColor: '#E2E6EA',
                            fontSize: '12px',
                            lineHeight: '16px',
                            // minWidth: 'unset'

                            '& .Mui-TableHeadCell-ResizeHandle-Wrapper': {
                                right: '-4px',
                                opacity: '0'
                            },
                            '& .Mui-TableHeadCell-Content-Labels': {
                                padding: '0'
                            }
                        },
                    }
                }}
                muiTableHeadRowProps={{
                    sx: {
                    }
                }}
                muiTableBodyRowProps={{
                    sx: {
                        height: 'auto !important',

                        '& td': {
                            border: '1px solid #CFD6DD',
                            padding: '8px 12px !important',
                        }
                    }
                }}
                muiTableBodyCellProps={{
                    sx: {
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                    }
                }}

            />
        </Box>
    );
};

export default Example;
