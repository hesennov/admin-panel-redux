import { AlertCircle, Database, RefreshCw, SearchX } from "lucide-react";

interface StatusViewProps {
  type: "error" | "empty" |"notfound";
  message: string;
  onRetry?: () => void;
}

export default function StatusView({
  type,
  message,
  onRetry,
}: StatusViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 p-8 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
      <div className="mb-4 p-4 bg-white rounded-full shadow-sm">
        {type === "error" ? (
          <AlertCircle className="w-12 h-12 text-red-500" />
        ) : type === "empty" ? (
          <Database className="w-12 h-12 text-blue-500" />
        ) : (
          <SearchX className="w-12 h-12 text-gray-500" />
        )}
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {type === "error"
          ? "¡Ay caramba! Something Went Wrong" 
          : type ==="empty"
          ?"No Tengo Data" 
          : "404 - Page Not Found"
          }
      </h2>

      <p className="text-gray-600 max-w-xs mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          {type === "error" && "TRY AGAIN"  }
          {type ==="notfound" && "GO TO HOME"}
        </button>
      )}
    </div>
  );
}
