import adobeAcrobat from "@assets/icons/file-icons/adobe-acrobat.svg";
import adobeIllustrator from "@assets/icons/file-icons/adobe-illustrator.svg";
import adobePhotoshop from "@assets/icons/file-icons/adobe-photoshop.svg";
import adobeXd from "@assets/icons/file-icons/adobe-xd.svg";
import figma from "@assets/icons/file-icons/figma.svg";
import microsoftWord from "@assets/icons/file-icons/microsoft-word.svg";
import { useAuth } from "@hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  HiOutlineDocument,
  HiOutlineDocumentArrowDown,
  HiOutlineTrash,
} from "react-icons/hi2";
const FileInfoBox = ({ status, attachment, attachments, setAttachments }) => {
  const { user } = useAuth();
  const { fileName, fileUrl, fileSize, fileType } = attachment;
  const [imageLoading, setImageLoading] = useState(true);

  const generateThumbnail = (fileUrl) => {
    // For Cloudinary URLs
    if (fileUrl.includes("cloudinary")) {
      return fileUrl.replace("/upload/", "/upload/c_thumb,w_30,h_30,q_60/");
    }

    // For local file URLs
    if (fileUrl.startsWith("blob:")) {
      return fileUrl; // Already a local preview URL
    }

    // For other image URLs
    return `${fileUrl}?w=45&h=45&q=60`;
  };
  const handleFileIcon = () => {
    switch (fileType) {
      case "pdf":
        return (
          <img
            src={adobeAcrobat}
            alt="adobe-acrobat"
            className="!w-7.5 h-auto"
            loading="lazy"
          />
        );
      case "ai":
        return (
          <img src={adobeIllustrator} alt="adobe-illustrator" loading="lazy" />
        );
      case "psd":
        return (
          <img src={adobePhotoshop} alt="adobe-photoshop" loading="lazy" />
        );
      case "xd":
        return <img src={adobeXd} alt="adobe-photoshop" loading="lazy" />;
      case "fig":
        return <img src={figma} alt="adobe-xd" loading="lazy" />;
      case "doc":
        return <img src={microsoftWord} alt="microsoft-word" loading="lazy" />;
      case "docx":
        return <img src={microsoftWord} alt="microsoft-word" loading="lazy" />;
      case "png":
      case "jpg":
      case "jpeg":
      case "svg":
      case "ico":
      case "webp":
        return (
          <div className="file-icon relative">
            {imageLoading && (
              <span className="loading loading-spinner loading-md text-accent-200 absolute inset-0 m-auto"></span>
            )}
            <img
              src={generateThumbnail(fileUrl)}
              alt={fileName}
              className={`h-full w-full rounded object-cover ${imageLoading ? "opacity-0" : "opacity-100"}`}
              loading="lazy"
              onLoad={() => setImageLoading(false)}
            />
          </div>
        );
      default:
        return <HiOutlineDocument className="w-9.5 h-auto text-green-600" />;
    }
  };

  const handleFileSize = () => {
    const bytes = parseFloat(fileSize);

    if (bytes < 1024) {
      return `${bytes.toFixed(2)} B`;
    } else if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(2)} KB`;
    } else {
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }
  };

  const handleFileDownload = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        try {
          fetch(fileUrl)
            .then((response) => response.blob())
            .then((blob) => {
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = fileName;
              document.body.appendChild(link);
              link.click();
              link.remove();
              window.URL.revokeObjectURL(url);
              resolve();
            })
            .catch((error) => reject(error));
        } catch (error) {
          reject(error);
        }
      }),
      {
        loading: `Downloading ${fileName}...`,
        success: `${fileName} downloaded successfully!`,
        error: `Failed to download ${fileName}`,
      },
    );
  };

  const handleFileDelete = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        try {
          const updatedAttachments = attachments.filter(
            (attachment) => attachment.fileName !== fileName,
          );
          setAttachments(updatedAttachments);
          const fileInputs = document.querySelectorAll('input[type="file"]');
          fileInputs.forEach((input) => (input.value = ""));
          resolve();
        } catch (error) {
          reject(error);
        }
      }),
      {
        loading: `Removing ${fileName}...`,
        success: `${fileName} removed successfully!`,
        error: `Failed to remove ${fileName}`,
      },
    );
  };

  return (
    <div className="border-accent-200 flex h-16 w-full items-center gap-3 overflow-hidden rounded border p-2 transition-all duration-300 hover:bg-gray-100">
      <div className="file-icon flex items-center justify-center">
        {handleFileIcon()}
      </div>
      <div className="file-info max-w-3xs overflow-hidden truncate whitespace-nowrap text-start">
        <p className="file-name text-text-primary truncate font-normal leading-4">
          {fileName}
        </p>

        <p className="text-secondary-300 truncate text-sm font-light">
          <span className="file-type">.{fileType}</span>
          <span className="mx-1">|</span>
          <span className="file-size">{handleFileSize()}</span>
        </p>
      </div>
      <div className="file-actions ml-auto flex items-center gap-2">
        <button
          className="hover:bg-accent-100 border-accent-200 border-1 text-secondary-400 flex h-10 w-10 transform cursor-pointer items-center justify-center rounded-full transition-all hover:text-green-600 active:scale-95"
          onClick={handleFileDownload}
        >
          <HiOutlineDocumentArrowDown className="h-5 w-5" />
        </button>
        {status === "pending" && user.role === "admin" && (
          <button className="hover:bg-accent-100 border-accent-200 border-1 text-secondary-400 flex h-10 w-10 transform cursor-pointer items-center justify-center rounded-full transition-all hover:text-red-600 active:scale-95">
            <HiOutlineTrash className="h-5 w-5" onClick={handleFileDelete} />
          </button>
        )}
      </div>
    </div>
  );
};

export default FileInfoBox;
