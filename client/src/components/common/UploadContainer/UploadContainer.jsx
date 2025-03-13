import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import {
  HiOutlineInformationCircle,
  HiOutlinePlusCircle,
} from "react-icons/hi2";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1em",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
  minHeight: "12.5em",
  height: "auto",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const UploadContainer = ({ setAttachments }) => {
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  const maxFiles = 5;
  const acceptedFileTypes = {
    "image/*": [".jpg", ".jpeg", ".png", ".gif", ".svg", ".ico", ".webp"],
    "application/pdf": [".pdf"],
    "application/msword": [".doc"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
    "application/photoshop": [".psd"],
    "application/figma": [".fig"],
    "application/illustrator": [".ai"],
    "application/xd": [".xd"],
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      toast.promise(
        // Simulating file processing promise
        new Promise((resolve, reject) => {
          try {
            // Transform and process file
            const transformedFile = {
              fileName: file.name,
              fileUrl: URL.createObjectURL(file),
              fileSize: (file.size / (1024 * 1024)).toFixed(2),
              fileType: file.name.split(".").pop(),
            };

            // Update attachments state
            setAttachments((prev) => [...prev, transformedFile]);
            resolve();
          } catch (error) {
            reject(error);
          }
        }),
        {
          loading: `Uploading ${file.name}...`,
          success: `${file.name} uploaded successfully!`,
          error: `Failed to upload ${file.name}`,
        },
      );
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    maxFiles,
    maxSize,
    accept: acceptedFileTypes,
    onDropRejected: (fileRejections) => {
      fileRejections.forEach(({ file, errors }) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "file-too-large":
              toast.error(`${file.name} is larger than 10MB`);
              break;
            case "file-invalid-type":
              toast.error(`${file.name} has an unsupported file type`);
              break;
            case "too-many-files":
              toast.error("Maximum 5 files allowed");
              break;
            default:
              toast.error(`Error uploading ${file.name}`);
          }
        });
      });
    },
    onFileDialogCancel: () => {
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.value = "";
      }
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <>
          <HiOutlinePlusCircle className="text-accent-300 h-auto w-10" />
          <p className="text-lg">Drag & drop or click to choose files</p>
          <div className="text-accent-300 mt-2 flex items-start gap-1">
            <HiOutlineInformationCircle className="h-auto w-5" />
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-medium">File Size Limit:</span>
                <span>5 MB per file</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">File Count Limit:</span>
                <span>Maximum 5 files</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium">Supported File Types:</span>
                <ul className="list-inside list-disc pl-2">
                  <li>Documents: .pdf, .doc, .docx</li>
                  <li>Images: .jpg, .jpeg, .png, .gif, .svg, .ico, .webp</li>
                  <li>Design Files: .psd, .fig, .ai, .xd</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UploadContainer;
