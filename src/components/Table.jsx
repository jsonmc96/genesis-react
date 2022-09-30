import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import { DeleteForeverIcon as Remove  } from "@mui/icons-material";
import { DeleteForeverIcon as ViewColumn  } from "@mui/icons-material";
import { DeleteForeverIcon as Search  } from "@mui/icons-material";
import { DeleteForeverIcon as SaveAlt  } from "@mui/icons-material";
import { DeleteForeverIcon as LastPage  } from "@mui/icons-material";
import { DeleteForeverIcon as FirstPage  } from "@mui/icons-material";
import { DeleteForeverIcon as FilterList  } from "@mui/icons-material";
import { DeleteForeverIcon as Edit  } from "@mui/icons-material";
import { DeleteForeverIcon as DeleteOutline  } from "@mui/icons-material";
import { DeleteForeverIcon as Clear  } from "@mui/icons-material";
import { DeleteForeverIcon as ChevronRight  } from "@mui/icons-material";
import { DeleteForeverIcon as ChevronLeft  } from "@mui/icons-material";
import { DeleteForeverIcon as Check  } from "@mui/icons-material";
import { DeleteForeverIcon as ArrowDownward  } from "@mui/icons-material";
import { DeleteForeverIcon as AddBox  } from "@mui/icons-material";

export default function TableActions({
  columnas,
  infor,
  botones,
  titulo,
  agregar,
}) {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <div style={{ width: "100%" }}>
      {/* <MaterialTable
        columns={columnas}
        icons={tableIcons}
        editable={agregar}
        data={infor}
        title={titulo}
        actions={botones}
        options={{
          actionsColumnIndex: -1,
        }}
      /> */}
    </div>
  );
}
